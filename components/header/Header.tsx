"use client";
import Link from "next/link";
import { Box } from "lucide-react";
import LangSwitcher from "@/components/header/LangSwitcher";
import ThemeSwitcher from "@/components/header/ThemeSwitcher";
import { useLang } from "@/hooks/useLang";

export default function Header() {
  
  const { locale } = useLang();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
            <Box />
            <span>{locale?.header?.title}</span>
          </Link>
          <div className="relative flex items-center gap-4">
            <LangSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
    </header>
  )
}