import SectionAbout from "./SectionAbout";
import CountUp from "react-countup";
import { useEffect, useRef, useState } from "react";
import { FaCarAlt, FaThumbsUp, FaBuilding, FaClock } from "react-icons/fa";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FactsAbout = () => {
  const containerRef = useRef(null);
  const countRefs = useRef([]);
  const [showCounter, setShowCounter] = useState(false);

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

  useEffect(() => {
    const cards = gsap.utils.toArray(".fact-card");

    gsap.set(cards, { y: 50, opacity: 0 });

    ScrollTrigger.batch(cards, {
      start: "top 85%",
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });
        setShowCounter(true);
      },
      once: true,
    });
  }, []);

  return (
    <div ref={containerRef}>
      <div className="bg-breadcrumb mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-4 mt-34">
        {reviewsContent.map(({ label, icon, number }, index) => (
          <div
            key={label}
            className="fact-card flex flex-col gap-4 items-center justify-center text-white"
          >
            <span className="icon-back font-extrabold text-[2em]">{icon}</span>
            <span
              ref={(el) => (countRefs.current[index] = el)}
              className="font-bold font-lato"
              style={{ fontSize: "calc(1.325rem + 0.9vw)" }}
            >
              {showCounter && <CountUp start={20} end={number} duration={1} />}+
            </span>
            <h4 className="font-medium">{label}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FactsAbout;
// Each .fact-card starts off-screen below (y: 50) and transparent.
// When scrolled into view (top 85%), all cards animate upward with fade-in.
// ScrollTrigger.batch adds a staggered effect so cards appear one by one.
// CountUp animation runs only once when they appear.
