import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PokeMentor",
  description: "PokeMentor is a pokemon companion app to help you train pokemon ev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex flex-col min-h-screen p-4 lg:px-12 lg:py-8">
            <nav className="max-w-5xl flex justify-between items-center">
              <h2 className="text-2xl font-bold">PokeMentor</h2>
            </nav>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
