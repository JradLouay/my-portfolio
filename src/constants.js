import quizImage from "../public/quiz-preview.jpg";
import galleriaImage from "../public/galleria-preview.jpg";
import portfolioImage from "../public/single-preview.jpg";
import audiophileImage from "../public/audiophile-preview.jpg";
import { subclip } from "three/src/animation/AnimationUtils";

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
    color: "bg-color-red-rusty",
    subTitle: "E-commerce website",
  },
  {
    name: "Galleria",
    image: galleriaImage,
    color: "bg-color-pinky",
    subTitle: "Art gallery slideshow",
  },
  {
    name: "Quiz",
    image: quizImage,
    color: "bg-color-dark-violet",
    subTitle: "Frontend Quiz app",
  },
];

export { urls, projects };
