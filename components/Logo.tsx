import { asset } from "@/lib/asset";

type Props = {
  className?: string;
};

export function Logo({ className = "h-10" }: Props) {
  return (
    <img
      src={asset("/images/logo.png")}
      alt="Сфера Авто"
      className={`${className} w-auto`}
    />
  );
}
