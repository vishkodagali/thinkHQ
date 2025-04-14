import type { Metadata } from "next";
import { Open_Sans, EB_Garamond } from "next/font/google";
import "./globals.css";


const openSans = Open_Sans({ subsets: ['latin'], weight: ['300', '400'], variable: '--font-open-sans' });
const ebGaramond = EB_Garamond({ subsets: ['latin'], weight: ['400'], style: ['italic'], variable: '--font-eb-garamond' });


export const metadata: Metadata = {
  title: "My 3D Model App",
  description: "Explore creative 3D visual experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${ebGaramond.variable}`}>
      <body className="bg-zinc-100 antialiased">{children}</body>
    </html>
  );
}
