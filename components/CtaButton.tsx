import { siteData } from "@/data/siteData";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "dark";
  className?: string;
};

export function CtaButton({ href, children, variant = "primary", className = "" }: Props) {
  const styles = {
    primary: "btn btn-primary",
    outline: "btn btn-outline",
    dark: "btn btn-dark",
  }[variant];

  return (
    <a href={href} className={`${styles} ${className}`}>
      {children}
    </a>
  );
}

export function Hours({ variant = "short" }: { variant?: "short" | "long" }) {
  return <span>{variant === "long" ? siteData.workingHours.long : siteData.workingHours.display}</span>;
}
