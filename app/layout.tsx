
import './globals.css'
import { Metadata } from 'next';
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "WikiLook!",
  description: "Created by Sim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-300 text-slate-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}





