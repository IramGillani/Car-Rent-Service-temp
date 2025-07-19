import { useRef, useEffect } from "react";
import Button from "../components/Button.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const el = bannerRef.current;

    gsap.fromTo(
      el,
      { autoAlpha: 0, scale: 0.8 },
      {
        autoAlpha: 1,
        scale: 1,
        duration: 1.2,
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
    <div
      ref={bannerRef}
      id="banner"
      className="relative w-full min-h-[80vh] px-8 py-12 opacity-0 scale-[0.8] rounded-2xl overflow-hidden"
    >
      {/* Background image + dark overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-[url('/img/banner-1.jpg')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-end pr-0 sm:pr-12">
        <h2 className="text-primary captalize text-sm md:text-2xl tracking-wide mb-2 sm:mb-5">
          Rent Your Car
        </h2>
        <h1 className="text-nowrap md:text-wrap text-white text-sm sm:text-2xl md:text-7xl font-bold mb-2  md:mb-5 text-right">
          Interested in Renting?
        </h1>
        <p className="text-white text-base md:text-2xl mb-5 text-right">
          Don’t hesitate and send us a message.
        </p>
        <div className="flex gap-4 text-[12px]">
          <Button
            title="WhatsApp"
            btnClass="bg-secondry hover:!bg-primary text-white rounded-full shadow-lg py-2 px-4 sm:py-3 sm:px-8"
          />
          <Button
            title="Contact Us"
            btnClass="bg-primary hover:hover-bg-secondry text-white rounded-full shadow-lg py-2 px-4 sm:py-3 sm:px-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
