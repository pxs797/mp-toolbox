import { defaultLocale, getDictionary } from "@/lib/i18n";
import HomeMain from "@/components/home/HomeMain";

export default async function Home({
  params: { lang }
}: {
  params: { lang: string | undefined }
}) {
  
  const langName = lang || defaultLocale;
  const dict = await getDictionary(langName);
  
  return (
    <HomeMain locale={dict.home} />
  );
}