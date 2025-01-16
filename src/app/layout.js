import { Analytics } from "@vercel/analytics/react";
import { Space_Grotesk } from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "./globals.css";
import StarsContainer from "@/components/stars/Stars";
import Script from "next/script";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Louay Jrad",
  creator: "Louay Jrad",
  keywords: [
    "Louay jrad",
    "Software Engineer",
    "Agile",
    "Scrum",
    "Frontend",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Next.js",
    "React",
    "Redux",
    "Jest",
    "Tailwindcss",
    "Styled components",
    "Vitest",
    "Git",
    "Docker",
    "Arabic",
    "English",
    "French",
  ],
  description:
    "Skilled and results-driven Software Engineer with 4 years of experience in designing and developing Frontend web applications. Demonstrated success in spearheading impactful projects, from developing a Learning Management System to optimizing user experiences for Fashion & Retail Tech startups. Proficient in collaborating across diverse teams, including UX designers and back-end developers to deliver high quality components and Optimized websites. Continuously staying abreast of emerging technologies and frameworks to drive innovation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <Script strategy="beforeInteractive" src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCH_PUBLIC_KEY}`} />
        <Header />
        <main className="section-container min-h-screen">{children}</main>
        <Footer />
        <StarsContainer />
        <Analytics />
      </body>
    </html>
  );
}
