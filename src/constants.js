import quizImage from "../public/quiz-preview.jpg";
import galleriaImage from "../public/galleria-preview.jpg";
import portfolioImage from "../public/single-preview.jpg";
import audiophileImage from "../public/audiophile-preview.jpg";
import coffeeroastersImage from "../public/coffeeroasters-preview.jpg";
import sinokompiImage from "../public/sinokompi.jpg";
const urls = [
  { text: "home", href: "/" },
  {
    text: "work",
    href: "/work",
  },
  {
    text: "contact",
    href: "/contact",
  },
];

const projects = [
  {
    name: "Portfolio",
    image: portfolioImage,
    color: "bg-color-mint",
    subTitle: "Single-page design portfolio",
    preview: "https://singlepage-design-portfolio.netlify.app/",
    github: "https://github.com/JradLouay/singlepage-design-portfolio",
  },
  {
    name: "Audiophile",
    image: audiophileImage,
    subTitle: "E-commerce website",
    preview: "https://audiophile-ecommerce-website-liart.vercel.app/",
    github: "https://github.com/JradLouay/audiophile-ecommerce-website",
  },
  {
    name: "Galleria",
    image: galleriaImage,
    subTitle: "Art gallery slideshow",
    preview: "https://louay-jrad-galleria.netlify.app/",
    github: "https://github.com/JradLouay/galleria-site",
  },
  {
    name: "Quiz",
    image: quizImage,
    subTitle: "Frontend Quiz app",
    preview: "https://profound-creponne-e7d05b.netlify.app/",
    github: "https://github.com/JradLouay/quiz-app",
  },
  {
    name: "Coffeeroasters",
    image: coffeeroastersImage,
    subTitle: "Coffeeroasters website",
    workInProgress: true,
  },
  {
    name: "Sinokompi",
    image: sinokompiImage,
    subTitle: "Sinokompi E-commerce website",
    workInProgress: true,
  },
];

const workExperience = [
  {
    jobTitle: "Frontend Eng",
    company: "Talan",
    period: "May.2024/Present",
    skills: [
      "Vitest",
      "React Router",
      "Tailwind CSS",
      "Redux",
      "Nextjs",
      "React",
    ],
  },
  {
    jobTitle: "Software Eng",
    company: "Deloitte",
    period: "Oct.2022/Apr.2024",
    skills: ["Angular", "Jest", "MUI", "Amcharts", "React"],
  },
  {
    jobTitle: "Frontend Eng",
    company: "SYW",
    period: "July.2022/Oct.2022",
    skills: ["Jest", "Styled−components", "MUI", "Redux", "React"],
  },
  {
    jobTitle: "Frontend Dev",
    company: "Umanlink",
    period: "Aug.2020/July.2022",
    skills: [
      "TailwindCSS",
      "Styled−components",
      "MUI",
      "Redux",
      "reactNative",
      "React",
    ],
  },
];
export { urls, projects, workExperience };
