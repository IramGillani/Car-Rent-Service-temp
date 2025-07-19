import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";
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
      className={`back-to-top ${
        showButton
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={goToTop}
    >
      <FaArrowUp className="font-extrabold arrow-above" />
    </button>
  );
};

export default ScrolltoTop;
