import Link from "next/link";
import { siteData } from "@/data/siteData";
import { Logo } from "@/components/Logo";

export function Footer() {
  const { name, address, workingHours, location } = siteData;
  return (
    <footer className="border-t border-white/10 pb-28 pt-10 md:pb-12">
      <div className="wrap flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Logo className="h-12" />
          <p className="mt-2 max-w-sm text-sm text-muted">
            Охраняемая площадка на {address.short}. {location.summary}. {workingHours.long}.
          </p>
        </div>
        <div className="text-sm text-muted">
          <p>{address.line}</p>
          <p className="mt-1">{location.highways}</p>
          <p className="mt-1">{location.metro}</p>
          <p className="mt-2">
            <Link className="text-amber hover:underline" href="/privacy">
              Политика конфиденциальности
            </Link>
          </p>
          <p className="mt-2">© {name}, {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
