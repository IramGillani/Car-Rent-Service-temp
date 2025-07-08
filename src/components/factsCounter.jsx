import SectionAbout from "./SectionAbout";
import CountUp from "react-countup";
import { useEffect, useRef, useState } from "react";
import { FaCarAlt, FaThumbsUp } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FactsAbout = () => {
  const reviewsContent = [
    {
      label: "Happy Clients",
      icon: <FaThumbsUp className="text-black" />,
      number: 829,
    },
    {
      label: "Number of Cars",
      icon: <FaCarAlt className="text-black" />,
      number: 56,
    },
    {
      label: "Car Center",
      icon: <FaBuilding className="text-black" />,
      number: 127,
    },
    {
      label: "Total kilometers",
      icon: <FaClock className="text-black" />,
      number: 589,
    },
  ];
  const countRef = useRef(null);
  const [showCounter, setShowCounter] = useState(false);

  useEffect(() => {
    if (!countRef.current) return;

    ScrollTrigger.create({
      trigger: countRef.current,
      start: "top 80%",
      onEnter: () => setShowCounter(true),
      once: true,
    });
  }, []);

  return (
    <div>
      <div className="bg-breadcrumb mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 mt-34">
        {reviewsContent.map(({ label, icon, number }) => (
          <div
            className="flex flex-col gap-4 items-center justify-center text-white"
            key={label}
          >
            <span className="icon-back font-extrabold  text-[2em]">{icon}</span>
            <span
              ref={countRef}
              className="font-bold font-lato"
              style={{ fontSize: "calc(1.325rem + 0.9vw)" }}
            >
              {/* text-[calc(1.325rem + 0.9vw)] */}
              {showCounter && (
                <CountUp start={20} end={number} delay={0} duration={1} />
              )}
              +
            </span>
            <h4 className="font-medium">{label}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FactsAbout;
