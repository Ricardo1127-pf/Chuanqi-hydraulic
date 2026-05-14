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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <head>
        <link rel="icon" type="image/png" href="/images/logo.png" />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
