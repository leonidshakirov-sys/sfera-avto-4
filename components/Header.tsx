"use client";

import { useState } from "react";
import { siteData } from "@/data/siteData";
import { CtaButton } from "@/components/CtaButton";
import { IconPhone } from "@/components/Icons";

const links = [
  { href: "#utp", label: "Площадка" },
  { href: "#audience", label: "Для кого" },
  { href: "#advantages", label: "Преимущества" },
  { href: "#prices", label: "Цены" },
  { href: "#photos", label: "Фото" },
  { href: "#how", label: "Как арендовать" },
  { href: "#contact", label: "Контакты" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/90 backdrop-blur-xl">
      <div className="wrap flex h-[72px] items-center justify-between gap-4">
        <a href="#top" className="shrink-0 tracking-[0.14em]">
          <span className="text-sm text-paper/80">СФЕРА</span>{" "}
          <span className="text-sm font-bold text-paper">АВТО</span>
        </a>
        <nav className="hidden items-center gap-5 lg:flex">
          {links.map((item) => (
            <a key={item.href} href={item.href} className="text-[13px] text-muted hover:text-paper">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <p className="text-xs font-medium text-muted">{siteData.workingHours.display}</p>
          <CtaButton href={`tel:${siteData.phone.tel}`} className="whitespace-nowrap">
            <IconPhone className="h-4 w-4" />
            {siteData.phone.tel}
          </CtaButton>
        </div>
        <a
          className="btn btn-primary whitespace-nowrap px-3 text-xs md:hidden"
          href={`tel:${siteData.phone.tel}`}
          aria-label={`Позвонить ${siteData.phone.tel}`}
        >
          <IconPhone className="h-4 w-4" />
          {siteData.phone.tel}
        </a>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 lg:hidden"
          aria-expanded={open}
          aria-label="Меню"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-lg">{open ? "×" : "☰"}</span>
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-ink px-5 py-4 lg:hidden">
          <p className="mb-3 text-xs text-muted">{siteData.workingHours.display}</p>
          <div className="grid gap-3">
            {links.map((item) => (
              <a key={item.href} href={item.href} className="text-paper" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <CtaButton href={`tel:${siteData.phone.tel}`} className="whitespace-nowrap">
              <IconPhone className="h-4 w-4" />
              {siteData.phone.tel}
            </CtaButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
