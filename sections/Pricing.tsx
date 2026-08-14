import { priceLabel, siteData } from "@/data/siteData";
import { CtaButton } from "@/components/CtaButton";

export function Pricing() {
  const cards = Object.values(siteData.prices);

  return (
    <section id="prices" className="section">
      <div className="wrap">
        <p className="eyebrow">Аренда</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold md:text-5xl">Варианты аренды</h2>
        <p className="mt-4 max-w-xl text-muted">
          Стоимость зависит от типа транспорта, срока и числа мест. Назовите, что нужно разместить — подготовим предложение.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article key={card.id} className="flex flex-col rounded-3xl border border-white/10 bg-steel p-6">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-4 text-3xl font-semibold text-amber">
                {priceLabel(card.fromRub, "custom" in card && card.custom)}
              </p>
              {"custom" in card && card.custom ? null : (
                <p className="mt-1 text-sm text-muted">за машиноместо в месяц</p>
              )}
              <CtaButton href={`#contact`} className="mt-8">
                Получить предложение
              </CtaButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
