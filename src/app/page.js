import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import WorkTogether from "@/components/WorkTogether";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <section className="flex flex-col">
        <h2 className="heading-xl self-start">Javascript</h2>
        <div className="flex">
          <h2 className="heading-xl self-end">html </h2>
          <h2 className="heading-xl self-end">css </h2>
          <h2 className="heading-xl self-end">Nextjs </h2>
        </div>
        <h2 className="heading-xl self-end">React </h2>
      </section> */}
      <Projects />

      <WorkTogether />
    </>
  );
}
