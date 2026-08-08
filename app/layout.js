import { Open_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "My Saudi Wellness | Corporate, School & Community Wellness",
  description:
    "My Saudi Wellness (MSW) improves the health of school children, corporate employees & the community through Health Risk Assessments, health scans, workshops and lifestyle programs across Saudi Arabia.",
  keywords: [
    "My Saudi Wellness",
    "Health Risk Assessment",
    "corporate wellness Saudi Arabia",
    "school health assessment",
    "health scan Riyadh",
  ],
  openGraph: {
    title: "My Saudi Wellness",
    description:
      "Improving the health of school children, corporate employees & the community across Saudi Arabia.",
    siteName: SITE.name,
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2E3192",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <body>{children}</body>
    </html>
  );
}
