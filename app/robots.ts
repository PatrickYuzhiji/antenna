import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio/", "/api/", "/admin/", "/*.json$"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/studio/", "/api/", "/admin/"],
      },
    ],
    sitemap: "https://itexample.com.au/sitemap.xml",
    host: "https://itexample.com.au",
  };
}
