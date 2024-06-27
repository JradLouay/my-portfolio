import DownloadCV from "./DownloadCV";

function WorkExperience() {
  return (
    <section className="mt-32 flex flex-col items-end gap-8">
      <div className="text-gray-700 flex xl:flex-row-reverse gap-2 flex-col">
        <h3 className="leading-[normal] text-[43.65px] font-semibold">
          Deloitte
        </h3>
        <p className="self-end font-semibold">Oct.2022/Present</p>
      </div>
      <div className="flex text-gray-700 xl:flex-row-reverse gap-2 flex-col">
        <h3 className="leading-[normal] text-[43.65px] font-semibold">
          Save Your Wardrobe
        </h3>
        <p className="self-end font-semibold">July.2022/Oct.2022</p>
      </div>
      <div className="flex text-gray-700 xl:flex-row-reverse gap-2 flex-col">
        <h3 className="leading-[normal] text-[43.65px] font-semibold">
          Umanlink Group
        </h3>

        <p className="self-end font-semibold">Aug.2020/July.2022</p>
      </div>

      <DownloadCV />
    </section>
  );
}

export default WorkExperience;
