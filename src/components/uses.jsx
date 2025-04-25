import { uses, workExperience } from "@/constants";
function UsesSection() {
    return (
        <section className="mt-32 flex flex-col items-end gap-8 text-end">
            <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-sm bg-slate-700" />
                <h4 className="heading-l font-bold text-gray-700">
                    What i use on a daily basis
                </h4>
            </div>
            {uses.hardware.map((item) => (
                <div key={item} className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2 text-gray-700 xl:flex-row-reverse">
                        <h3 className="heading-m font-semibold">
                            {item}
                        </h3>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default UsesSection;
