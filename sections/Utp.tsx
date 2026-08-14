import { Photo } from "@/components/Photo";
import { siteData } from "@/data/siteData";
import { CtaButton } from "@/components/CtaButton";

export function Utp() {
  const { workingHours, address, location } = siteData;
  const stats = [
    { value: siteData.area, label: "площадь" },
    { value: `${workingHours.from}–${workingHours.to}`, label: workingHours.days },
    { value: address.short, label: "адрес" },
    { value: "Аннино", label: "одна остановка на автобусе" },
  ];

  return (
    <section id="utp" className="section pt-0">
      <div className="wrap grid items-center gap-10 lg:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden rounded-3xl">
          <Photo
            src="/images/lot-mkad.jpg"
            alt="Площадка Сфера Авто на первой линии Варшавского шоссе и МКАД"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="eyebrow">Расположение</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
            Первая линия Варшавского шоссе и МКАД
          </h2>
          <p className="mt-5 text-lg text-muted">
            Не нужно искать место во дворах, на временных парковках или далеко от основного маршрута.
          </p>
          <p className="mt-4 text-lg text-muted">
            Транспорт размещается на охраняемой территории. {location.summary}.
          </p>
          <p className="mt-4 text-paper">
            Доступ к площадке: {workingHours.long.toLowerCase()}.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-steel p-4">
                <p className="text-2xl font-semibold text-amber md:text-3xl">{item.value}</p>
                <p className="mt-1 text-sm text-muted">{item.label}</p>
              </div>
            ))}
          </div>
          <CtaButton href="#prices" className="mt-8">
            Подобрать место
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
