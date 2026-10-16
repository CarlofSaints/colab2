import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://www.colab2.co.za/", changeFrequency: "monthly", priority: 1 }];
}
