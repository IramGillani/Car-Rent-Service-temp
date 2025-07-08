import { FaArrowUp } from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

gsap.to(".back-to-top", {
  duration: 5,
  y: -100,
  scrollTrigger: ".back-to-top",

  ease: "power1.inOut",
});
const ScrolltoTop = () => {
  const handleScrolling = () => {
    const scrolly =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (scrolly > 200) {
      setshowButton(true);
    } else {
      setshowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrolling);
    return () => {
      window.removeEventListener("scroll", handleScrolling);
    };
  }, []);

  const [showButton, setshowButton] = useState(false);

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <button
      className={`back-to-top ${showButton ? "visible" : "invisible"}`}
      onClick={goToTop}
    >
      <FaArrowUp className="font-extrabold arrow-above" />
    </button>
  );
};

export default ScrolltoTop;

// import { FaArrowUp } from "react-icons/fa";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import gsap from "gsap";
// import { useEffect, useState, useRef } from "react";

// gsap.registerPlugin(ScrollTrigger);

// const ScrolltoTop = () => {
//   const [showButton, setShowButton] = useState(false);
//   const buttonRef = useRef(null);

//   useEffect(() => {
//     const handleScrolling = () => {
//       const scrolly =
//         document.body.scrollTop || document.documentElement.scrollTop;
//       setShowButton(scrolly > 200);
//     };

//     window.addEventListener("scroll", handleScrolling);
//     return () => {
//       window.removeEventListener("scroll", handleScrolling);
//     };
//   }, []);

//   useEffect(() => {
//     if (showButton && buttonRef.current) {
//       gsap.fromTo(
//         buttonRef.current,
//         { y: 100, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.5,
//           ease: "power1.inOut",
//         }
//       );
//     }
//   }, [showButton]);

//   const goToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <button
//       ref={buttonRef}
//       className={`back-to-top fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white transition-opacity duration-300 ${
//         showButton ? "opacity-100" : "opacity-0 pointer-events-none"
//       }`}
//       onClick={goToTop}
//     >
//       <FaArrowUp className="text-xl" />
//     </button>
//   );
// };

// export default ScrolltoTop;
