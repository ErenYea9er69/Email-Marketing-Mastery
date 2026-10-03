import type { Metadata } from "next";
import { Montserrat, DM_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Email Marketing Mastery | The Ecommerce Email Marketing Community by Max Sturtevant",
  description: "The most complete ecommerce email marketing course on the internet. 30+ modules, 250+ templates, a Claude skill and two live calls every week.",
  openGraph: {
    title: "Email Marketing Mastery | Max Sturtevant",
    description: "The most complete ecommerce email marketing course on the internet. 30+ modules, 250+ templates, a Claude skill and two live calls every week.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="bg-bg-deep text-text-primary font-sans antialiased selection:bg-brand selection:text-brand-dark">
        {children}
      </body>
    </html>
  );
}
