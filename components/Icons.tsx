export function IconPhone({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6.5 3.75h3.2l1.2 3.1-2 1.2a12.5 12.5 0 0 0 6.05 6.05l1.2-2 3.1 1.2v3.2c0 .7-.57 1.3-1.28 1.3C9.7 17.8 6.2 14.3 6.2 5.03c0-.7.6-1.28 1.3-1.28Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconShield({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3.5 19 6.2v5.4c0 4.2-2.8 7.7-7 9.4-4.2-1.7-7-5.2-7-9.4V6.2L12 3.5Z" stroke="currentColor" strokeWidth="1.6"/>
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

export function IconCam({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="7" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.6"/>
      <path d="m15.5 11 5-2.5v7l-5-2.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconLight({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3v2M12 19v2M5 12H3M21 12h-2M6.2 6.2 4.8 4.8M19.2 19.2l-1.4-1.4M17.8 6.2l1.4-1.4M6.2 17.8 4.8 19.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  );
}

export function IconRoad({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="m4 20 5-16h6l5 16" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M12 5v3M12 11v3M12 17v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

export function IconPin({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 21s6.5-6.1 6.5-11A6.5 6.5 0 0 0 5.5 10c0 4.9 6.5 11 6.5 11Z" stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  );
}

export function IconClock({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M12 8v4.2l2.6 1.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

export function IconBolt({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M13 3 5.5 13h6L11 21 18.5 11h-6L13 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconWrench({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M14.5 6.5a4 4 0 0 0-5.6 5.6L4 16.9 7.1 20l4.8-4.9a4 4 0 0 0 5.6-5.6l-2.4 2.4-2.1-2.1 2.5-2.3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconGrid({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="4" width="7" height="7" rx="1.4" stroke="currentColor" strokeWidth="1.6"/>
      <rect x="13" y="4" width="7" height="7" rx="1.4" stroke="currentColor" strokeWidth="1.6"/>
      <rect x="4" y="13" width="7" height="7" rx="1.4" stroke="currentColor" strokeWidth="1.6"/>
      <rect x="13" y="13" width="7" height="7" rx="1.4" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  );
}

export function IconClose({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="m7 7 10 10M17 7 7 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

export const advantageIcons = [IconRoad, IconCam, IconLight, IconShield, IconBolt, IconWrench, IconGrid, IconClock];
