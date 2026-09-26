import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "../style/globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Aditi Garg | ENT Specialist & Surgeon in New Delhi",
  description:
    "Dr. Aditi Garg (MBBS, DNB - ENT) is an Associate Consultant at Sir Ganga Ram Hospital and Director at Shivasha ENT Clinic, New Delhi. Expert in ear, nose, sinus, throat, voice, and endoscopic surgeries.",
  keywords:
    "Dr Aditi Garg, ENT Specialist New Delhi, Sir Ganga Ram Hospital ENT, Shivasha ENT Clinic Mayur Vihar, Ear Nose Throat Surgeon, Sinus Surgery Delhi, DNB ENT",
  icons: {
    icon: '/icon.jpg',
    apple: '/icon.jpg',
  },
  openGraph: {
    title: "Dr. Aditi Garg | ENT Specialist & Surgeon",
    description:
      "Expert ENT care with a personal approach. Associate Consultant at Sir Ganga Ram Hospital, New Delhi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#fbfdfc] text-slate-800 min-h-screen">
        {children}
      </body>
    </html>
  );
}

