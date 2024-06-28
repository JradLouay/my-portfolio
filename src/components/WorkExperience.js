import DownloadCV from "./DownloadCV";
import LinkHoverEffect from "./LinkHoverEffect";

function WorkExperience() {
  return (
    <section className="mt-32 flex flex-col items-end gap-8 text-end">
      {/* <h4 className="text-gray-700 heading-xl">Experience</h4> */}
      <div className="flex flex-col gap-2 text-gray-700 xl:flex-row-reverse">
        <h3 className="heading-l font-semibold">Deloitte</h3>
        <p className="self-end font-semibold">Oct.2022/Present</p>
      </div>
      <div className="flex flex-col gap-2 text-gray-700 xl:flex-row-reverse">
        <h3 className="heading-l font-semibold">Save Your Wardrobe</h3>
        <p className="self-end font-semibold">July.2022/Oct.2022</p>
      </div>
      <div className="flex flex-col gap-2 text-gray-700 xl:flex-row-reverse">
        <h3 className="heading-l font-semibold">Umanlink Group</h3>

        <p className="self-end font-semibold">Aug.2020/July.2022</p>
      </div>

      <LinkHoverEffect target="_blank" href={"/Louay_Jrad_CV.pdf"}>
        Download my cv
      </LinkHoverEffect>
    </section>
  );
}

export default WorkExperience;
