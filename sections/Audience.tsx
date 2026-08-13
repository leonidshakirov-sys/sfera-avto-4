import Image from "next/image";
import { CtaButton } from "@/components/CtaButton";

const cards = [
  {
    title: "Легковые автомобили",
    text: "Для долгосрочного размещения автомобилей.",
    image: "/images/card-cars.jpg",
    alt: "Легковые автомобили на площадке Сфера Авто",
  },
  {
    title: "Коммерческий транспорт",
    text: "Газели, фургоны, микроавтобусы и другой коммерческий транспорт.",
    image: "/images/card-commercial.jpg",
    alt: "Коммерческий фургон на территории Сфера Авто",
  },
  {
    title: "Грузовой транспорт",
    text: "Грузовые автомобили и тягачи — по согласованию габаритов и количества.",
    image: "/images/card-truck.jpg",
    alt: "Грузовой транспорт на площадке у МКАД",
  },
  {
    title: "Спецтехника",
    text: "Экскаваторы, погрузчики, строительная, дорожная и другая спецтехника.",
    image: "/images/card-special.jpg",
    alt: "Открытая площадка Сфера Авто для размещения техники",
  },
];

export function Audience() {
  return (
    <section id="audience" className="section">
      <div className="wrap">
        <p className="eyebrow">Аудитория</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold md:text-5xl">Кому подходит площадка</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {cards.map((card) => (
            <article key={card.title} className="group relative min-h-[340px] overflow-hidden rounded-3xl">
              <Image src={card.image} alt={card.alt} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-2xl font-semibold">{card.title}</h3>
                <p className="mt-2 max-w-md text-sm text-paper/80">{card.text}</p>
                <CtaButton href="#prices" className="mt-5">
                  Узнать стоимость
                </CtaButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
