import { siteData } from "@/data/siteData";
import { IconPhone } from "@/components/Icons";

export function MobileBar() {
  const { workingHours, phone, messengers } = siteData;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 px-3 pb-[max(12px,env(safe-area-inset-bottom))] pt-2 backdrop-blur md:hidden">
      <p className="mb-2 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
        {workingHours.display}
      </p>
      <div className="grid grid-cols-2 gap-2">
        <a href={`tel:${phone.tel}`} className="btn btn-primary whitespace-nowrap px-3 text-sm" aria-label={`Позвонить ${phone.tel}`}>
          <IconPhone className="h-4 w-4" />
          {phone.tel}
        </a>
        <a href={messengers.whatsapp} className="btn btn-outline" target="_blank" rel="noopener">
          Написать
        </a>
      </div>
    </div>
  );
}
