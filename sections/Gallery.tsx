"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { siteData } from "@/data/siteData";
import { CtaButton } from "@/components/CtaButton";
import { IconClose } from "@/components/Icons";

export function Gallery() {
  const photos = siteData.gallery;
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active == null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((i) => (i == null ? 0 : (i + 1) % photos.length));
      if (event.key === "ArrowLeft") setActive((i) => (i == null ? 0 : (i - 1 + photos.length) % photos.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, photos.length]);

  const current = active == null ? null : photos[active];

  return (
    <section id="photos" className="section bg-graphite">
      <div className="wrap">
        <p className="eyebrow">Галерея объекта</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold md:text-5xl">Посмотрите площадку до приезда</h2>
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          <button
            type="button"
            className="relative min-h-[280px] overflow-hidden rounded-3xl md:col-span-3 md:min-h-[460px]"
            onClick={() => setActive(0)}
          >
            <Image src={photos[0].src} alt={photos[0].alt} fill className="object-cover object-[center_60%]" sizes="100vw" />
            <span className="absolute bottom-4 left-4 rounded-full bg-ink/70 px-3 py-1 text-sm">{photos[0].caption}</span>
          </button>
          {photos.slice(1).map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              className={`relative min-h-[200px] overflow-hidden rounded-2xl ${photo.src.includes("access") ? "md:col-span-2" : ""}`}
              onClick={() => setActive(index + 1)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className={photo.src.includes("access") ? "object-cover object-center" : "object-cover"}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-ink/70 px-3 py-1 text-xs">{photo.caption}</span>
            </button>
          ))}
        </div>
        <div className="mt-8">
          <CtaButton href="#contact">Записаться на просмотр</CtaButton>
        </div>
      </div>

      {current ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/90 p-4" role="dialog" aria-modal>
          <button type="button" className="absolute right-5 top-5 text-paper" onClick={() => setActive(null)} aria-label="Закрыть">
            <IconClose />
          </button>
          <button type="button" className="absolute left-3 top-1/2 text-3xl" onClick={() => setActive((i) => (i == null ? 0 : (i - 1 + photos.length) % photos.length))} aria-label="Назад">
            ‹
          </button>
          <div className="relative h-[min(80vh,720px)] w-[min(92vw,1100px)]">
            <Image src={current.src} alt={current.alt} fill className="object-contain" sizes="92vw" />
          </div>
          <button type="button" className="absolute right-3 top-1/2 text-3xl" onClick={() => setActive((i) => (i == null ? 0 : (i + 1) % photos.length))} aria-label="Вперёд">
            ›
          </button>
          <p className="absolute bottom-6 text-sm text-paper/80">{current.caption}</p>
        </div>
      ) : null}
    </section>
  );
}
