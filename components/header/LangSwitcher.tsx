"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { defaultLocale, localeNames } from "@/lib/i18n";
import { useRouter } from "next/navigation";

export default function LangSwitcher() {
  const router = useRouter();

  const handleSwitchLang = (value: string) =>{
    if (value === defaultLocale) {
      router.push("/");
      return;
    }
    router.push(value);
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe />
          <span className="sr-only">Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {
          (Object.entries(localeNames) as [string, string][]).map(([key, value]) => {
            return (
              <DropdownMenuItem key={key} onClick={() => handleSwitchLang(key)}>
                {value}
              </DropdownMenuItem>
            )
          })
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
