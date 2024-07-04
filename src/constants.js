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
  },
  {
    name: "Audiophile",
    image: audiophileImage,
    subTitle: "E-commerce website",
  },
  {
    name: "Galleria",
    image: galleriaImage,
    subTitle: "Art gallery slideshow",
  },
  {
    name: "Quiz",
    image: quizImage,
    subTitle: "Frontend Quiz app",
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
  },
];

const workExperience = [
  {
    jobTitle: "Frontend Eng",
    company: "Deloitte",
    period: "Oct.2022/Present",
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
      "Tailwindcss",
      "Styled−components",
      "MUI",
      "Redux",
      "reactNative",
      "React",
    ],
  },
];
export { urls, projects, workExperience };
