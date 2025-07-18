import SectionAbout from "../SectionAbout";
import { cardContent } from "../../data.jsx";
import FactsAbout from "../factsCounter.jsx";
import Header from "../Header.jsx";
import Reviews from "../Reviews.jsx";
import Banner from "../Banner.jsx";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const scrollRef = useRef(null);

  const Card = ({ icon, title, desc, className = "" }) => {
    const el = scrollRef.current;
    useEffect(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 90 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, []);
    return (
      <div className="bg-primary rounded-xl" ref={scrollRef}>
        <div
          className={`shadow-[0_0_45px_rgba(0,0,0,0.1)] rounded-sm p-6 flex items-center justify-center flex-col gap-4.5 transition-all duration-[0.5s] hover:rounded-[60px] hover:bg-[#f2f2f2] bg-white`}
        >
          <div className="icon-back">
            <span className="text-3xl font-extrabold">{icon}</span>
          </div>
          <h4 className="font-medium text-xl">{title}</h4>
          <p className="text-center text-[#6e7684]">{desc}</p>
        </div>
      </div>
    );
  };
  return (
    <>
      <Header pageTitle="Services" />
      <section className="main-section">
        <SectionAbout
          title="Service"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo
          expedita asperiores commodi accusantium at cum harum, excepturi, quia
          tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-fit px-4 ">
          {cardContent.map(({ icon, id, title, desc }) => (
            <Card icon={icon} key={id} title={title} desc={desc} />
          ))}
        </div>
        <FactsAbout ref={scrollRef} />
        <Reviews />
        <Banner />
      </section>
    </>
  );
};

export default Service;
