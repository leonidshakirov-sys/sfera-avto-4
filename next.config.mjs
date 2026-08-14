import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
    typescript: { ignoreBuildErrors: false },
    eslint: { ignoreDuringBuilds: true },
  basePath: basePath || undefined,
  webpack: (config) => {
    config.resolve.alias["@"] = __dirname;
    return config;
  },
};

export default nextConfig;
