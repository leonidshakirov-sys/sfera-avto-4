import { asset } from "@/lib/asset";

type Props = {
  className?: string;
};

export function Logo({ className = "h-10" }: Props) {
  return (
    <img
      src={asset("/images/logo.png")}
      alt="Сфера Авто"
      className={`${className} w-auto bg-white rounded-md px-2 py-1`}
    />
  );
}
