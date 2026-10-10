import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Mofada — Precision Sobriety & Habit Transformation",
  description:
    "A clinically grounded sobriety system combining real-time urge defusal, biometric milestone certification, and reformed capital grants. Zero fluff, pure behavioral engineering.",
  keywords: [
    "Mofada",
    "SoberOne",
    "sobriety tracker",
    "habit transformation",
    "craving defusal",
    "biometric certification",
    "recovery capital",
  ],
  authors: [{ name: "Mofada Engineering" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 selection:bg-brand-navy selection:text-white">
        {children}
      </body>
    </html>
  );
}
