import Image from "next/image";
import { siteData } from "@/data/siteData";
import { CtaButton } from "@/components/CtaButton";

export function Access() {
  const { address, workingHours, links } = siteData;

  return (
    <section id="access" className="relative overflow-hidden py-24">
      <Image src="/images/access.jpg" alt="Въезд на площадку Сфера Авто с стороны МКАД" fill className="object-cover object-center" sizes="100vw" />
      <div className="absolute inset-0 bg-ink/75" />
      <div className="wrap relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow">Локация</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Удобный въезд с МКАД</h2>
          <p className="mt-5 max-w-xl text-lg text-paper/85">
            «Сфера Авто» находится на 32-м км МКАД. Площадка подходит владельцам транспорта и компаниям, которым важно иметь удобный доступ к МКАД и не хранить технику далеко от основных маршрутов.
          </p>
          <p className="mt-8 text-3xl font-semibold md:text-4xl">{address.line}</p>
          <p className="mt-3 text-amber">{workingHours.long}</p>
          <CtaButton href={links.route} className="mt-8">
            Построить маршрут
          </CtaButton>
        </div>
        <iframe
          title="Карта Сфера Авто"
          className="min-h-[320px] w-full rounded-3xl border-0"
          src={links.mapEmbed}
          loading="lazy"
        />
      </div>
    </section>
  );
}
