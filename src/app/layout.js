import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
// export const metadata = {
//   title: "Mhd Moaz Tello",
//   description: "moaz tello portfolio",
// };
export const metadata = {
  title: {
    default: "Moaz Tello | Full-Stack Developer",
    template: "%s | Moaz Tello",
  },
  description:
    "Full-Stack Developer متخصص بـ React, Next.js, Node.js و React Native. أبني تطبيقات ويب وموبايل حديثة وقابلة للتوسع.",
  keywords: [
    "Moaz Tello",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "React Native",
    "JavaScript",
    "Web Developer",
  ],
  authors: [{ name: "Moaz Tello" }],
  creator: "Moaz Tello",
  alternates: {
    canonical: "https://moaz-tello-portfolio.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Moaz Tello | Full-Stack Developer",
    description:
      "Portfolio of Moaz Tello – Full-Stack Developer specialized in modern web & mobile apps.",
    url: "https://moaz-tello-portfolio.vercel.app/",
    siteName: "Moaz Tello Portfolio",
    images: [
      {
        url: "https://moaz-tello-portfolio.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Moaz Tello Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moaz Tello | Full-Stack Developer",
    description:
      "Full-Stack Developer specialized in React, Next.js, Node.js & React Native.",
    images: ["https://moaz-tello-portfolio.vercel.app/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
