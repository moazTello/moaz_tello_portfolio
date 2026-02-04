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

export const metadata = {
  metadataBase: new URL("https://moaz-tello-portfolio.vercel.app"),
  title: {
    default: "Moaz Tello | Full-Stack Developer",
    template: "%s | Moaz Tello",
  },
  description:
    "Moaz Tello هو Full-Stack Developer متخصص بـ React, Next.js, Node.js و React Native. أبني تطبيقات ويب وموبايل حديثة وقابلة للتوسع.",
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
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Moaz Tello | Full-Stack Developer",
    description:
      "Portfolio of Moaz Tello – Full-Stack Developer specialized in modern web & mobile apps.",
    url: "/",
    siteName: "Moaz Tello Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Moaz Tello Portfolio",
      },
    ],
    type: "profile",
    profile: {
      firstName: "Moaz",
      lastName: "Tello",
      username: "moaz-tello",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Moaz Tello | Full-Stack Developer",
    description:
      "Full-Stack Developer specialized in React, Next.js, Node.js & React Native.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Moaz Tello",
              url: "https://moaz-tello-portfolio.vercel.app",
              image: "https://moaz-tello-portfolio.vercel.app/me.png",
              jobTitle: "Full-Stack Developer",
              sameAs: [
                "https://github.com/Eng-Moaz-Tello",
                "https://www.linkedin.com/in/mmt-tello-9b0a4026a",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
