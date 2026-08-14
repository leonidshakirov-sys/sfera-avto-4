import { siteData } from "@/data/siteData";
import { CtaButton } from "@/components/CtaButton";

export function FinalCta() {
  const { address, workingHours, phone, location } = siteData;
  return (
    <section className="pb-24">
      <div className="wrap overflow-hidden rounded-[32px] bg-steel">
        <div className="grid gap-8 p-8 md:grid-cols-[1.3fr_0.7fr] md:p-12">
          <div>
            <h2 className="text-3xl font-semibold md:text-5xl">Нужна площадка под ваш транспорт?</h2>
            <p className="mt-4 max-w-xl text-lg text-muted">
              Первая линия Варшавского шоссе и МКАД, рядом остановка, до метро Аннино — одна остановка на автобусе. Расскажите, какой транспорт нужно разместить — предложим подходящий вариант аренды.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton href="#contact">Получить предложение</CtaButton>
              <CtaButton href={`tel:${phone.tel}`} variant="outline" className="whitespace-nowrap">
                {phone.tel}
              </CtaButton>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-ink p-6">
            <p className="text-xl font-semibold">{address.line}</p>
            <p className="mt-2 text-sm text-muted">{location.highways}</p>
            <p className="mt-1 text-sm text-muted">{location.busStop}</p>
            <p className="mt-1 text-sm text-muted">{location.metro}</p>
            <p className="mt-4 text-sm text-muted">{workingHours.days}</p>
            <p className="text-2xl font-semibold text-amber">
              {workingHours.from}–{workingHours.to}
            </p>
            <p className="mt-4 text-sm text-muted">Телефон</p>
            <a href={`tel:${phone.tel}`} className="text-xl font-semibold text-paper">
              {phone.tel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
