import { Photo } from "@/components/Photo";
import { siteData } from "@/data/siteData";
import { CtaButton } from "@/components/CtaButton";
import { IconBus, IconMetro, IconRoad, IconShield } from "@/components/Icons";

const highlights = [
  { icon: IconShield, title: "Охраняемая территория" },
  { icon: IconRoad, title: "Первая линия Варшавки и МКАД" },
  { icon: IconBus, title: "Остановка рядом" },
  { icon: IconMetro, title: "До Аннино — 1 остановка" },
];

export function Hero() {
  const { workingHours, address, area, location } = siteData;

  return (
    <section id="top" className="relative min-h-[92vh] overflow-hidden">
      <Photo
        src="/images/hero.jpg"
        alt="Охраняемая площадка Сфера Авто на первой линии Варшавского шоссе и МКАД"
        fill
        priority
        className="object-cover object-[center_62%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/78 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/30" />
      <div className="wrap relative flex min-h-[92vh] flex-col justify-end pb-16 pt-28 md:justify-center md:pb-24 md:pt-20">
        <p className="eyebrow">{workingHours.long}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
          Охраняемая площадка на Варшавском шоссе и МКАД
          <br />
          для автомобилей, спецтехники
          <br />
          и коммерческого транспорта
        </h1>
        <p className="mt-5 max-w-xl text-lg text-paper/80">
          Машиноместа и территория в аренду
          <br />
          {location.summary}
        </p>
        <p className="mt-2 text-sm text-paper/70">
          {address.short} • {workingHours.display}
        </p>
        <p className="mt-3 text-sm text-muted">Открытая площадка {area}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaButton href="#prices">Узнать стоимость</CtaButton>
          <CtaButton href="#contact" variant="outline">
            Записаться на просмотр
          </CtaButton>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {highlights.map(({ icon: Icon, title }) => (
            <li key={title} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink/45 px-4 py-3 backdrop-blur">
              <Icon className="h-5 w-5 text-amber" />
              <span className="text-sm font-medium">{title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
