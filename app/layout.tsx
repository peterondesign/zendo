import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { UserProvider } from '@auth0/nextjs-auth0/client';

import AuthLoader from '@/components/authloader';

import * as Cronitor from '@cronitorio/cronitor-rum';

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Eisenhower Matrix",
    "template",
    "online",
    "eisenhower matrix template",
    "eisenhower matrix app",
    "productivity",
    "task management",
    "priority matrix",
  ],
  icons: {
    icon: "/zendologo.png",
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zendo.cc',
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    site: '@ptndesign',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        {/* Cronitor RUM */}
        <script async src="https://rum.cronitor.io/script.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.cronitor = window.cronitor || function() { 
                (window.cronitor.q = window.cronitor.q || []).push(arguments); 
              };
              cronitor('config', { clientKey: 'e81fde5710b90e1b42b794a33a0a2ad0' });
            `,
          }}
        />
      </head>
      <body
        className={clsx(
          "bg-gradient-radial-gray bg-gradient-noise bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(v,i,s,a,t){v[t]=v[t]||function(){(v[t].v=v[t].v||[]).push(arguments)};if(!v._visaSettings){v._visaSettings={}}v._visaSettings[a]={v:'1.0',s:a,a:'1',t:t};var b=i.getElementsByTagName('body')[0];var p=i.createElement('script');p.defer=1;p.async=1;p.src=s+'?s='+a;b.appendChild(p)})(window,document,'//app-worker.visitor-analytics.io/main.js','f0c6be6b-7f02-11ef-9280-bee4895ac99e','va')`,
          }}
        />
        <UserProvider>
          <AuthLoader>
            <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
              <div className="relative flex flex-col min-h-dvh">
                <Navbar />
                <main className="container mx-auto max-w-7xl pt-4 px-6 flex-grow">
                  {children}
                </main>
                <footer className="w-full flex items-center justify-center py-3">
                  <Link
                    isExternal
                    className="flex items-center gap-1 text-current"
                    href="https://x.com/ptndesign"
                    title="Ptndesign homepage"
                  >
                    <span className="text-default-600">Built by</span>
                    <p className="text-primary">Ptndesign</p>
                  </Link>
                </footer>
              </div>
            </Providers>
          </AuthLoader>
        </UserProvider>
      </body>
    </html>
  );
}