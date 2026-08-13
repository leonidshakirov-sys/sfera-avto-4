import { siteData } from "@/data/siteData";

export function Footer() {
  const { name, address, workingHours } = siteData;
  return (
    <footer className="border-t border-white/10 pb-28 pt-10 md:pb-12">
      <div className="wrap flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="tracking-[0.14em]">
            <span className="text-paper/80">СФЕРА</span> <span className="font-bold">АВТО</span>
          </p>
          <p className="mt-2 max-w-sm text-sm text-muted">
            Охраняемая площадка на {address.short}. {workingHours.long}.
          </p>
        </div>
        <div className="text-sm text-muted">
          <p>{address.line}</p>
          <p className="mt-2">
            <a className="text-amber hover:underline" href="/privacy/">
              Политика конфиденциальности
            </a>
          </p>
          <p className="mt-2">© {name}, {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
