import Link from "next/link";

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
  const cls = `${styles} ${className}`;
  const internal = href.startsWith("/") && !href.startsWith("//");

  if (internal) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}
