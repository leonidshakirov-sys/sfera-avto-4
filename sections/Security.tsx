import Image from "next/image";
import { siteData } from "@/data/siteData";

export function Security() {
  const { workingHours } = siteData;
  return (
    <section id="security" className="section">
      <div className="wrap grid items-center gap-8 lg:grid-cols-2">
        <div className="relative min-h-[380px] overflow-hidden rounded-3xl">
          <Image
            src="/images/barrier.jpg"
            alt="Шлагбаум и пост охраны на въезде Сфера Авто"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="eyebrow">Доступ</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Контролируемый въезд на территорию</h2>
          <p className="mt-5 text-lg text-muted">
            Охраняемая площадка с видеонаблюдением и организованным доступом.
          </p>
          <p className="mt-6 text-xl font-medium text-amber">{workingHours.display}</p>
        </div>
      </div>
    </section>
  );
}
