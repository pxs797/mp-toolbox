"use client";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Image, FilePen, File, Eye, Ruler, Code, Lock, QrCode } from "lucide-react";
import { useLang } from "@/hooks/useLang";

export default function HomeMain({ locale }: { locale: any }) {

  const { locale: { home } } = useLang();

  return (
    <main className="flex-1">
      <section className="container grid gap-8 px-4 py-12 mx-auto md:px-6 md:py-16">
        <div className="grid gap-2">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{locale.title}</h1>
          <p className="text-muted-foreground">
            {locale.desc}
          </p>
          <div className="relative w-full max-w-md">
            <div className="absolute left-2.5 top-2.5 h-4 w-4">
              <Search className="w-4 h-4" />
            </div>
            <Input
              type="search"
              placeholder={locale.searchTips}
              className="w-full rounded-lg bg-background pl-8 pr-4 focus:ring-primary focus:ring-2"
            />
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {
            home?.navList.map((item: any, index: number) => {
              return (
                <Link href="#" className="group" prefetch={false} key={index}>
                  <Card className="h-full">
                    <CardHeader>
                      <Image />
                    </CardHeader>
                    <CardContent>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })
          }
          {/* <Link href="#" className="group" prefetch={false}>
            <Card className="h-full">
              <CardHeader>
                <Image />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">Image Editor</h3>
                <p className="text-muted-foreground">Resize, crop, and enhance your images.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="#" className="group" prefetch={false}>
            <Card className="h-full">
              <CardHeader>
                <FilePen/>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">Text Editor</h3>
                <p className="text-muted-foreground">Write, format, and edit text documents.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="#" className="group" prefetch={false}>
            <Card className="h-full">
              <CardHeader>
                <File />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">PDF Tools</h3>
                <p className="text-muted-foreground">Merge, split, and manipulate PDF files.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="#" className="group" prefetch={false}>
            <Card className="h-full">
              <CardHeader>
                <Eye />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">Color Picker</h3>
                <p className="text-muted-foreground">Find the perfect color for your projects.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="#" className="group" prefetch={false}>
            <Card className="h-full">
              <CardHeader>
                <Ruler />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">Unit Converter</h3>
                <p className="text-muted-foreground">Convert between various units of measurement.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="#" className="group" prefetch={false}>
            <Card className="h-full">
              <CardHeader>
                <Code />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">Code Formatter</h3>
                <p className="text-muted-foreground">Beautify and format your code snippets.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="#" className="group" prefetch={false}>
            <Card className="h-full">
              <CardHeader>
                <Lock />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">Password Generator</h3>
                <p className="text-muted-foreground">Create secure and unique passwords.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="#" className="group" prefetch={false}>
            <Card className="h-full">
              <CardHeader>
                <QrCode />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">QR Code Generator</h3>
                <p className="text-muted-foreground">Generate QR codes for your projects.</p>
              </CardContent>
            </Card>
          </Link> */}
        </div>
      </section>
    </main>
  )
}
