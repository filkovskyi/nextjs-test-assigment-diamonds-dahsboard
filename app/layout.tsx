import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import "./globals.css";
import AuthProvider from '@/app/providers/session-provider'

export const metadata: Metadata = {
  title: {
    template: '%s | Diamond Dashboard',
    default: 'Diamond Dashboard',
  },
  description: 'Diamond Dashboard for premium quality'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
