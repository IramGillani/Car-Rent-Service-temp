// hooks/useGsapScrollFadeIn.js
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const useGsapScrollFadeIn = (
  selector = ".fact-card",
  triggerStart = "top 85%",
  once = true,
  onEnterCallback = () => {}
) => {
  useEffect(() => {
    const elements = gsap.utils.toArray(selector);
    gsap.set(elements, { y: 50, opacity: 0 });

    ScrollTrigger.batch(elements, {
      start: triggerStart,
      once,
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });

        onEnterCallback();
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector, triggerStart, once, onEnterCallback]);
};

export default useGsapScrollFadeIn;
