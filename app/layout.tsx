import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteData } from "@/data/siteData";

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  display: "swap",
  variable: "--font-sans",
});

const { seo, siteUrl, name, address, phone, workingHours, geo } = siteData;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seo.title,
  description: seo.description,
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: name,
    title: seo.title,
    description: seo.description,
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: name }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/images/og.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  additionalType: "https://schema.org/ParkingFacility",
  name,
  url: siteUrl,
  telephone: phone.tel,
  image: `${siteUrl}/images/og.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: address.line,
    addressLocality: address.city,
    addressCountry: "RU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: geo.lat,
    longitude: geo.lng,
  },
  openingHours: workingHours.schema,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: workingHours.from,
    closes: workingHours.to,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
