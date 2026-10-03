import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "My Portfolio",
    template: "%s | My Portfolio",
  },
  description:
    "A professional portfolio showcasing my projects, skills, and experience.",
  keywords: [
    "portfolio",
    "web developer",
    "Next.js",
    "React",
    "MongoDB",
  ],
  authors: [{ name: "AK" }],
  openGraph: {
    title: "My Portfolio",
    description:
      "A professional portfolio showcasing my projects, skills, and experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <footer className="mt-10 border-t p-6 text-center">
          <p>© 2026 My Portfolio</p>
        </footer>
      </body>
    </html>
  );
}