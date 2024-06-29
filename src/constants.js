import quizImage from "../public/quiz-preview.jpg";
import galleriaImage from "../public/galleria-preview.jpg";
import portfolioImage from "../public/single-preview.jpg";
import audiophileImage from "../public/audiophile-preview.jpg";

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
  },
  {
    name: "Audiophile",
    image: audiophileImage,
    color: "bg-color-red-rusty",
  },
  {
    name: "Galleria",
    image: galleriaImage,
    color: "bg-color-pinky",
  },
  {
    name: "Quiz",
    image: quizImage,
    color: "bg-color-pinky",
  },
];

export { urls, projects };
