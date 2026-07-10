import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clutch Financial | Financial Coaching for Professionals and Families",
  description:
    "Financial coaching and education for professionals and growing families who want clearer habits, thoughtful decisions, and practical follow-through.",
  icons: {
    icon: "/clutch-financial-logo.png",
    apple: "/clutch-financial-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
