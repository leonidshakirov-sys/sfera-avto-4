import { siteData } from "@/data/siteData";
import { advantageIcons } from "@/components/Icons";

export function Advantages() {
  return (
    <section id="advantages" className="section bg-graphite">
      <div className="wrap">
        <p className="eyebrow">Преимущества</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold md:text-5xl">Почему выбирают «Сфера Авто»</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteData.advantages.map((item, index) => {
            const Icon = advantageIcons[index];
            const text = "hours" in item && item.hours ? siteData.workingHours.long : item.text;
            return (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-steel p-6">
                <Icon className="h-7 w-7 text-amber" />
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
