const nav = document.querySelector("[data-nav]");
const menuBtn = document.querySelector("[data-menu]");
const form = document.querySelector("[data-form]");
const statusEl = document.querySelector("[data-status]");
const yearEl = document.querySelector("[data-year]");
const THEME_KEY = "sfera-theme";
const THEMES = ["asphalt", "showroom", "livery"];

function applyTheme(theme) {
  const next = THEMES.includes(theme) ? theme : "asphalt";
  if (next === "asphalt") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", next);
  }
  try {
    localStorage.setItem(THEME_KEY, next);
  } catch {
    // Ignore private-mode storage errors.
  }
  document.querySelectorAll("[data-theme-set]").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.getAttribute("data-theme-set") === next));
  });
}

(function initTheme() {
  let stored = "asphalt";
  try {
    stored = localStorage.getItem(THEME_KEY) || "asphalt";
  } catch {
    stored = "asphalt";
  }
  applyTheme(stored);
})();

document.querySelectorAll("[data-theme-set]").forEach((btn) => {
  btn.addEventListener("click", () => applyTheme(btn.getAttribute("data-theme-set")));
});

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

function setStatus(message, kind) {
  if (!statusEl) return;
  statusEl.textContent = message;
  statusEl.classList.remove("ok", "err");
  if (kind) statusEl.classList.add(kind);
}

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const consent = data.get("consent");
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();

    if (!consent) {
      setStatus("Нужно согласие на обработку персональных данных.", "err");
      return;
    }
    if (name.length < 2 || phone.length < 7) {
      setStatus("Укажите имя и телефон, чтобы мы могли перезвонить.", "err");
      return;
    }

    setStatus("Отправляем заявку…");

    const hostedForms = /(netlify\.app|netlify\.com)$/.test(location.hostname);
    if (hostedForms) {
      try {
        const encoded = new URLSearchParams(data);
        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encoded.toString(),
        });
        if (response.ok) {
          window.location.href = "thanks.html";
          return;
        }
      } catch {
        // Fall through to the confirmation page.
      }
    }

    window.location.href = "thanks.html";
  });
}
