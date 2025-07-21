import Header from "../Header";
import SectionAbout from "../SectionAbout";

import { FaCheckCircle } from "react-icons/fa";
import Button from "../Button";
import FactsAbout from "../factsCounter";
import Banner from "../Banner";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Features from "../Features";
import CustomerSupport from "../CustomerSupport";
import Process from "../Process";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const bannerRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      bannerRef.current,
      {
        x: 80,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: bannerRef.current,
        },
      }
    );
  }, []);

  const numberOfYears = new Date().getFullYear() - 2008;

  return (
    <>
      <Header pageTitle="About" />
      <section className="main-section">
        <SectionAbout
          title="About"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,"
          sectionClass="flex flex-col items-start"
          pclass="text-left !mx-0"
        />
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-6 ">
          {" "}
          {[
            {
              icon: "./img/about-icon-1.png",
              title: "Our Vision",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
              icon: "./img/about-icon-2.png",
              title: "Our Mission",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
          ].map(({ icon, title, desc }) => (
            <div
              className="flex flex-col transition-all duration-[0.5s] items-center justify-center rounded-[10px] bg-[#f2f2f2] p-6 border-[1px]border-[#dee2e6]"
              key={title}
            >
              <span className="icon-back mb-4 ">
                <img src={icon} alt="vision" className="h-[50%] w-[50%]" />
              </span>
              <span className="mb-4 text-[1.25rem] font-medium">{title}</span>
              <p className="text-center text-light tracking-tighter">{desc}</p>
            </div>
          ))}
        </div>
        <p className="my-6 pl-[25px] relative after:w-[5px] after:h-full after:absolute after:top-0 after:left-0 after:content-['*'] after:bg-secondry after:rounded-[10px] text-justify tracking-tight leading-relaxed text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          aliquam ipsum. Sed suscipit dolorem libero sequi aut natus debitis
          reprehenderit facilis quaerat similique, est at in eum. Quo, obcaecati
          in!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 text-white items-center">
          <div className="bg-secondry rounded-xl p-6 flex flex-col gap-2 justify-center items-center flex-1 mb-6">
            <h1
              className="font-bold"
              style={{ fontSize: "alc(1.375rem + 1.5vw)" }}
            >
              {numberOfYears}
            </h1>
            <span className="text-[1.25rem] font-medium leading-1.2">
              Years Of Experience
            </span>
          </div>
          <div className="px-6">
            <ul>
              {[
                "Morbi tristique senectus",
                "A scelerisque purus",
                "Dictumst vestibulum",
                "dio aenean sed adipiscing",
              ].map((item) => (
                <li className="flex items-center gap-2" key={item}>
                  <span>
                    <FaCheckCircle className="text-primary" />
                  </span>
                  <span className="text-light "> {item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-4 justify-between items-center ">
            {" "}
            <Button
              title="More About Us"
              btnClass="!rounded-[10px] py-4 px-12  flex-1 text-nowrap focus:outline-none focus:bg-[#c7001a] focus:border-[#bb0018] focus:border-4"
            />
            <div className="flex gap-2 items-center md:flex-1 ">
              <img
                src="./img/attachment-img.jpg"
                alt="person-profile"
                className="border-4 border-secondry rounded-full w-25 h-25"
              />

              <div>
                <h4 className="text-dark font-medium text-nowrap">
                  William Burgess
                </h4>
                <span className="text-light">Carveo Founder</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-full mt-12 px-12" ref={bannerRef}>
          <div className="rounded-[10px] h-full w-full max-w-full relative after:absolute after:content-[''] after:w-[10px] after:h-[98%] after:top-0 after:right-0 after:rounded-[10px] after:bg-primary z-[8]">
            <div className="h-[85%] mr-[50px] overflow-hidden">
              <img
                src="./img/about-img.jpg"
                alt="key chain in hand "
                className="w-full h-full rounded-[10px] align-middle"
              />
            </div>
            <div className="absolute w-full -bottom-20 right-0 pl-[50px] rounded-[10px] z-10 max-w-full">
              <img
                src="./img/about-img-1.jpg"
                alt="girl enjoying tour"
                className="w-full rounded-[10px] h-auto max-w-full align-middle"
              />
            </div>
          </div>
        </div>
        <FactsAbout />
        <Features />
        <Process />
        <CustomerSupport />
        <section>
          <Banner />
        </section>
      </section>
    </>
  );
};

export default About;
