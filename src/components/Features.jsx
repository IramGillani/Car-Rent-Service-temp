import SectionAbout from "./SectionAbout";
import { FaTrophy } from "react-icons/fa";
import { FaRoad } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";
const Features = () => {
  return (
    <section>
      <SectionAbout
        title="Features"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,"
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        <div className="flex flex-col gap-6">
          {[
            {
              feature: "First Class services",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?",
              icon: <FaTrophy />,
            },
            {
              feature: "24/7 road assistance",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?",
              icon: <FaRoad />,
            },
          ].map(({ icon, feature, desc }) => (
            <div className="flex items-center gap-6" key={feature}>
              <span className="icon-back text-secondry text-[2em] font-extrabold w-20 h-20">
                {icon}
              </span>
              <div>
                <span className="mb-4 text-xl font-medium text-dark text-[1rem] md:text-[1.25rem] lg:mb-1 lg:text-[1rem] lg:text-nowrap">
                  {feature}
                </span>
                <p className="text-light tracking-tight leading-[1.5] text-[12px] sm:text-[14px] md:text-base lg:text-[0.8rem]">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <img
          src="./img/features-img.png"
          alt=""
          className="w-full object-center object-conver"
        />
        <div className="flex flex-col gap-6 ">
          {[
            {
              feature: "Quality at Minimum",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?",
              icon: <FaTag />,
            },
            {
              feature: "Free Pick-Up & Drop-Off",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?",
              icon: <FaMapPin />,
            },
          ].map(({ icon, feature, desc }) => (
            <div
              className="flex items-center gap-6 flex-row-reverse"
              key={feature}
            >
              <span className="icon-back text-secondry text-[2em] font-extrabold w-[90px] h-[90px]">
                {icon}
              </span>
              <div className="flex flex-col gap-0">
                <span className=" text-[1rem] md:text-[1.25rem] font-medium text-dark self-end lg:self-start lg:mb-1 lg:text-[1rem] lg:text-nowrap">
                  {feature}
                </span>
                <p className="text-light tracking-tight leading-[1.5] text-[12px] sm:text-[14px] md:text-base text-right lg:text-[0.8rem] ">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
