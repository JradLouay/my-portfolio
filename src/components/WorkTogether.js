import ContactsComponent from "./ContactsComponent";

function WorkTogether() {
  return (
    <section className="mb-[366px] py-10 px-6 md:px-12 lg:px-28 bg-white rounded-[20px] shadow-custom-black flex-col gap-14 flex">
      <div className="flex-col justify-start gap-[5px] flex">
        <h4 className="text-gray-700 text-[40.80px] font-medium ">
          Want to work together?
        </h4>
        <p className="max-w-[746px] text-stone-900 text-[25.69px] font-normal">
          Feel free to reach out for collaborations or just a friendly hello{" "}
          <br />
          <span className="font-bold">jrad.louay@gmail.com</span>
        </p>
      </div>
      <ContactsComponent />
    </section>
  );
}

export default WorkTogether;
