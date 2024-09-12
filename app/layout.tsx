import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { defaultLocale, getDictionary } from "@/lib/i18n";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MP Toolbox",
  description: "Online Toolbox",
};

export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string | undefined }
}>) {

  return (
    <html lang={lang || defaultLocale}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
