import DownloadCV from "./DownloadCV";
import LinkHoverEffect from "./LinkHoverEffect";

function WorkExperience() {
  return (
    <section className="mt-32 flex flex-col items-end gap-8 text-end">
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 rounded-sm bg-slate-700" />
        <h4 className="heading-m font-bold text-gray-700">
          Professional Experience
        </h4>
      </div>
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

      <DownloadCV />
    </section>
  );
}

export default WorkExperience;
