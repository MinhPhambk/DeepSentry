import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // Static export cho GitHub Pages
  images: {
    unoptimized: true, // Bắt buộc khi export tĩnh
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.ibb.co" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "nurui.vercel.app" },
    ],
  },
  // basePath: isProd ? "/DeepSentry" : "",
  // assetPrefix: isProd ? "/DeepSentry/" : "",
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  webpack(config) {
    config.module.rules.push({
      test: /\.tsx?$/,
      resourceQuery: /raw/, // *.tsx?raw
      use: "raw-loader",
    });
    return config;
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);