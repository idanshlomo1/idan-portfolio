
import type { Metadata } from "next";
import { Montserrat as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { useEffect } from "react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Idan Shlomo - Fullstack Developer",
  description: "Idan Shlomo is a skilled fullstack developer specializing in creating well-designed and responsive web applications. With expertise in technologies such as React, Next.js, and Tailwind CSS, Idan builds dynamic and efficient solutions tailored to business needs. Explore projects and learn more about Idan's professional journey and innovative work.",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/custom.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/logo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/logo.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
  },
  robots: "index, follow",
  keywords: [
    "Fullstack Developer",
    "Web Development",
    "React",
    "Next.js",
    "Tailwind CSS",
    "מתכנת צעיר",
    "Frontend Development",
    "Backend Development",
    "JavaScript",
    "TypeScript",
    "CSS",
    "HTML",
    "Responsive Design",
    "UI/UX Design",
    "MongoDB",
    "Firebase",
    "Node.js",
    "Express.js",
    "GraphQL",
    "API Development",
    "PWA",
    "Serverless",
    "Web Applications",
    "Software Engineer",
    "Portfolio",
    "Project Management",
    "Tech Enthusiast",
  ],
  authors: [{ name: "Idan Shlomo", url: "https://idanshlomo-dev.netlify.app" }],
  applicationName: "Idan Shlomo Portfolio",
  generator: "Next.js",
  themeColor: "#000000",
  colorScheme: "dark",
  creator: "Idan Shlomo",
  publisher: "Idan Shlomo",
  openGraph: {
    title: "Idan Shlomo - Fullstack Developer",
    description: "Idan Shlomo is a skilled fullstack developer specializing in creating well-designed and responsive web applications.",
    url: "https://idanshlomo-dev.netlify.app",
    images: [
      {
        url: "/logoImage.jpg",
        width: 1200,
        height: 1200,
        alt: "Og Image Alt",
        type: "image/jpg",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="">
            {children}
          </div>
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
