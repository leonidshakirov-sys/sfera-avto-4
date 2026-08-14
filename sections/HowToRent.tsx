import { siteData } from "@/data/siteData";
import { CtaButton } from "@/components/CtaButton";

export function HowToRent() {
  const { workingHours } = siteData;
  const steps = [
    {
      n: "01",
      title: "Оставляете заявку",
      text: "Сообщаете тип транспорта, количество единиц и предполагаемый срок аренды.",
    },
    {
      n: "02",
      title: "Приезжаете на просмотр",
      text: `Показываем свободные места и территорию. Просмотр возможен в часы работы: ${workingHours.from}–${workingHours.to}.`,
    },
    {
      n: "03",
      title: "Согласовываем условия",
      text: "Определяем место, стоимость, срок аренды и дополнительные условия.",
    },
  ];

  return (
    <section id="how" className="section bg-graphite">
      <div className="wrap">
        <p className="eyebrow">Сценарий</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Как арендовать</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.n} className="rounded-3xl border border-white/10 bg-steel p-6">
              <p className="text-sm font-semibold text-amber">{step.n}</p>
              <h3 className="mt-4 text-2xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-muted">{step.text}</p>
            </article>
          ))}
        </div>
        <CtaButton href="#contact" className="mt-8">
          Записаться на просмотр
        </CtaButton>
      </div>
    </section>
  );
}
