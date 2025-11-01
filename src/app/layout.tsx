import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Karsaz Tech - Establish Your Tech Hub in Pakistan | Global Expansion Made Easy",
  description: "Transform global expansion from a risk into your unfair advantage. Karsaz Tech helps businesses establish world-class software tech hubs in Pakistan. We handle legal services, talent acquisition, office setup, and daily operations so you can focus on growth.",
  keywords: [
    "tech hub Pakistan",
    "software development Pakistan",
    "remote team Pakistan",
    "tech talent Pakistan",
    "business setup Pakistan",
    "Pakistan tech outsourcing",
    "offshore development team",
    "Pakistan IT services",
    "tech hub setup",
    "Pakistan software engineers",
  ],
  authors: [{ name: "Karsaz Tech" }],
  creator: "Karsaz Tech",
  publisher: "Karsaz Tech",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://karsaz-tech.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Karsaz Tech - Establish Your Tech Hub in Pakistan",
    description: "Transform global expansion from a risk into your unfair advantage. Establish a world-class software tech hub in Pakistan with comprehensive legal services, top-tier talent acquisition, and end-to-end office setup.",
    url: "/",
    siteName: "Karsaz Tech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Karsaz Tech - Your Gateway to Pakistan's Tech Talent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karsaz Tech - Your Tech Hub in Pakistan",
    description: "Transform global expansion from a risk into your unfair advantage. Establish a world-class software tech hub in Pakistan.",
    images: ["/og-image.jpg"],
    creator: "@karsaztech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
