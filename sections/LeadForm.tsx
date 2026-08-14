"use client";

import { FormEvent, useState } from "react";
import { siteData } from "@/data/siteData";

export function LeadForm() {
  const { phone, messengers, transportTypes } = siteData;
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const tel = String(data.get("phone") || "").trim();
    if (name.length < 2 || tel.length < 7) {
      setStatus("err");
      return;
    }

    const body = new URLSearchParams();
    data.forEach((value, key) => body.append(key, String(value)));
    const hosted = /(netlify\.app|netlify\.com)$/.test(window.location.hostname);
    if (hosted) {
      try {
        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: body.toString(),
        });
      } catch {
        // Show local confirmation anyway.
      }
    }

    setStatus("ok");
    form.reset();
  }

  return (
    <section id="contact" className="section">
      <div className="wrap grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <form name="sfera-lead" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={onSubmit} className="grid gap-4 rounded-3xl border border-white/10 bg-steel p-6 md:p-8">
          <input type="hidden" name="form-name" value="sfera-lead" />
          <p className="hidden">
            <label>
              Не заполняйте <input name="bot-field" />
            </label>
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">Подберём место под ваш транспорт</h2>
          <label className="grid gap-2 text-sm text-muted">
            Имя
            <input name="name" autoComplete="name" required placeholder="Как к вам обращаться" />
          </label>
          <label className="grid gap-2 text-sm text-muted">
            Телефон
            <input name="phone" type="tel" autoComplete="tel" required placeholder="+7" />
          </label>
          <label className="grid gap-2 text-sm text-muted">
            Тип транспорта
            <select name="transport" defaultValue="car">
              {transportTypes.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm text-muted">
            Количество единиц
            <input name="count" type="number" min={1} placeholder="1" />
          </label>
          <label className="grid gap-2 text-sm text-muted">
            Комментарий
            <textarea name="comment" placeholder="Срок аренды, габариты, пожелания" />
          </label>
          <button className="btn btn-primary" type="submit">
            Получить предложение
          </button>
          {status === "ok" ? (
            <p className="text-sm text-amber">Спасибо! Свяжемся с вами для уточнения условий.</p>
          ) : null}
          {status === "err" ? (
            <p className="text-sm text-red-400">Укажите имя и телефон, чтобы мы могли связаться.</p>
          ) : null}
        </form>

        <aside className="rounded-3xl border border-white/10 bg-graphite p-6 md:p-8">
          <p className="eyebrow">Связь</p>
          <a href={`tel:${phone.tel}`} className="mt-4 block text-3xl font-semibold text-amber">
            {phone.tel}
          </a>
          <p className="mt-3 text-muted">{siteData.workingHours.long}</p>
          <p className="mt-2 text-muted">{siteData.address.line}</p>
          <p className="mt-1 text-muted">{siteData.location.highways}</p>
          <p className="mt-1 text-muted">{siteData.location.busStop}</p>
          <p className="mt-1 text-muted">{siteData.location.metro}</p>
          <div className="mt-8 grid gap-3">
            <a className="btn btn-primary whitespace-nowrap" href={`tel:${phone.tel}`}>
              {phone.tel}
            </a>
            <a className="btn btn-outline" href={messengers.whatsapp} target="_blank" rel="noopener">
              WhatsApp
            </a>
            <a className="btn btn-outline" href={messengers.telegram} target="_blank" rel="noopener">
              Telegram
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
