import Image, { ImageProps } from "next/image";
import { asset } from "@/lib/asset";

type Props = Omit<ImageProps, "src"> & { src: string };

export function Photo({ src, ...props }: Props) {
  return <Image src={asset(src)} {...props} />;
}
