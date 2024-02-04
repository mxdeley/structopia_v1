import Header from "@/components/Header";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "@/app/globals.css";

const inter = Roboto({
  weight: ["100", "300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Structopia",
  description: "A Structural Engineering Assistant",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="bg-marketing">{children}</main>
      </body>
    </html>
  );
}
