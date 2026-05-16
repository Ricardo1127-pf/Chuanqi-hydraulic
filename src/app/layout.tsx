import { headers } from "next/headers";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ChuanQi Hydraulic - Radial Piston Hydraulic Motors",
    template: "%s | ChuanQi Hydraulic",
  },
  description:
    "ChuanQi Hydraulic manufactures CA, CB, CBP, CBM, MB series radial piston hydraulic motors — quality replacements for Hägglunds. Also hydraulic pumps, valves, winches. Factory-direct, global shipping.",
  keywords: [
    "radial piston hydraulic motor",
    "Hägglunds replacement",
    "CA hydraulic motor",
    "CB hydraulic motor",
    "CBP hydraulic motor",
    "CBM hydraulic motor",
    "MB Marathon motor",
    "hydraulic winch",
    "hydraulic pump",
    "hydraulic valve",
    "low speed high torque motor",
    "LSHT motor",
    "ChuanQi Hydraulic",
    "China hydraulic motor manufacturer",
  ],
  robots: "index, follow",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const lang = headersList.get("x-lang") || "en";

  return (
    <html lang={lang}>
      <head>
        <link rel="icon" type="image/png" href="/images/logo.png" />
        <meta name="baidu-site-verification" content="code-YOUR_BAIDU_CODE" />
        <meta name="sogou_site_verification" content="YOUR_SOGOU_CODE" />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
