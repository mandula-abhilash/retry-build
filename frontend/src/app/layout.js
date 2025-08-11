import { Inter, Lato } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: "retry.build - Strategic SaaS Blueprints",
  description:
    "Meticulously curated vault of SaaS blueprints backed by market research. Clear execution paths, realistic timelines, and actionable next steps.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Retry" />
      </head>
      <body className={`${inter.variable} ${lato.variable}`}>{children}</body>
    </html>
  );
}
