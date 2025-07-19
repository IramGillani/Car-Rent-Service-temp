import SectionAbout from "../../SectionAbout";
const Process = () => {
  return (
    <div className="bg-breadcrumb p-8 mx-auto">
      <SectionAbout
        title="Process"
        hClass="text-white"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,"
      />
      <div className="flex flex-col md:flex-row gap-6 px-6 justify-center items-center">
        {[
          {
            step: "Come In Contact",
            detail:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!",
            num: "01.",
          },
          {
            step: "Choose A Car",
            detail:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!",
            num: "02.",
          },
          {
            step: "Enjoy Driving",
            detail:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!",
            num: "03.",
          },
        ].map(({ num, step, detail }) => (
          <div
            key={num}
            className="bg-secondry rounded-[10px] p-6 relative mb-6 "
          >
            <h4 className="font-medium mb-2 text-white text-[1rem]  lg::text-[1.5rem]">
              {step}
            </h4>
            <span className="text-white text-[12px] sm:text-[14px] md:text:xl">
              {detail}
            </span>
            <span className="absolute -bottom-6 right-[40px] rounded-[64px] w-16 h-16 font-extrabold border border-white text-white flex items-center justify-center bg-secondry">
              {num}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
