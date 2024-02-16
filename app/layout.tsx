import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aniket Pawar",
  description:
    "Hey! I'm Aniket Pawar. A passionate student developer who enjoys making impactful projects on the web, mobile and in real life.",
  openGraph: {
    type: "website",
    url: "https://aniket-pawar.vercel.app/",
    title: "Aniket Pawar",
    description:
      "Hey! I'm Aniket Pawar. A passionate student developer who enjoys making impactful projects on the web, mobile and in real life.",
    images:
      "https://ik.imagekit.io/2oajjadqkz/portfolio-image.png?updatedAt=1708077902850",
  },
  twitter: {
    card: "summary",
    title: "Aniket Pawar",
    description:
      "Hey! I'm Aniket Pawar. A passionate student developer who enjoys making impactful projects on the web, mobile and in real life.",
    images:
      "https://ik.imagekit.io/2oajjadqkz/portfolio-image.png?updatedAt=1708077902850",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
