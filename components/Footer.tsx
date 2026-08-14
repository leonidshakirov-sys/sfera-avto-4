import Link from "next/link";
import { siteData } from "@/data/siteData";
import { Logo } from "@/components/Logo";

export function Footer() {
  const { name, address, workingHours, location, metrikaId } = siteData;
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
          {metrikaId ? (
            <p className="mt-4">
              <a
                href={`https://metrika.yandex.ru/stat/?id=${metrikaId}&from=informer`}
                target="_blank"
                rel="nofollow noopener"
              >
                <img
                  src={`https://informer.yandex.ru/informer/${metrikaId}/3_1_FFFFFFFF_EFEFEFFF_0_pageviews`}
                  width={88}
                  height={31}
                  alt="Яндекс.Метрика"
                  title="Яндекс.Метрика: данные за сегодня"
                  className="ym-advanced-informer rounded-sm"
                  data-cid={String(metrikaId)}
                  data-lang="ru"
                />
              </a>
            </p>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
