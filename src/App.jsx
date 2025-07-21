import "./App.css";
import { FaCarAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { pages } from "./data.jsx";
import Button from "./components/Button.jsx";

import { useWindowScroll } from "react-use";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Home from "./components/Pages/Home";
import About from "./components/Pages/About.jsx";
import Blog from "./components/Pages/Blog";
import Contact from "./components/Pages/Contact";
import Service from "./components/Pages/Service";
import Pages from "./components/Pages/Pages";
import ScrolltoTop from "./components/ScrolltoTop.jsx";

import Footer from "./Footer.jsx";
import OurFeatures from "./components/Pages/OurFeatures.jsx";
import OurTeam from "./components/Pages/OurTeam.jsx";
import Testimonal from "./components/Pages/Testimonal.jsx";
import OurCars from "./components/Pages/OurCars.jsx";
import ErrorPage from "./components/Pages/404Page.jsx";
gsap.registerPlugin(ScrollTrigger);

function App() {
  //  gsap.utils.toArray("section").forEach((section) => {
  //   gsap.fromTo(section,
  //     { opacity: 0, y: 60 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1.2,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: section,
  //         start: "top 85%",
  //         toggleActions: "play none none none",
  //       }
  //     }
  //   );
  // });

  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  const Navbar = () => {
    const navContainerRef = useRef(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const { y: currentScrollY } = useWindowScroll();
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
      if (currentScrollY === 0) {
        setIsNavbarVisible(true);
        navContainerRef.current.classList.remove("floating-nav");
      } else if (currentScrollY > lastScrollY) {
        setIsNavbarVisible(false);
        navContainerRef.current.classList.add("floating-nav");
      } else if (currentScrollY < lastScrollY) {
        setIsNavbarVisible(true);
        navContainerRef.current.classList.add("floating-nav");
      }
      setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);

    useEffect(() => {
      gsap.to(navContainerRef.current, {
        y: isNavbarVisible ? 0 : -100,
        opacity: isNavbarVisible ? 1 : 0,
        duration: 0.2,
        ease: "power2.out",
      });
    }, [isNavbarVisible]);

    const handleNavbarToggle = () => {
      setIsNavbarOpen(!isNavbarOpen);
    };

    // $(window).scroll(function () {
    //   if ($(this).scrollTop() > 200) {
    //     $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    //   } else {
    //     $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    //   }
    // });

    return (
      <nav
        className="flex inset-x-0 top-0 z-[99] fixed h-16 justify-between py-2 px-4 md:p-12 bottom-0 w-full items-center"
        ref={navContainerRef}
      >
        <Link to="/" className="text-primary font-bold">
          <h1 className="flex justify-between items-center gap-2">
            {" "}
            <FaCarAlt />
            <span>Cental</span>
          </h1>
        </Link>

        <span className="border-primary border-1 px-[15px] py-[8px] rounded-[0.625rem] text-[1.25rem] lg:hidden">
          <FaBars className=" text-primary" onClick={handleNavbarToggle} />
        </span>
        {isNavbarOpen ? (
          <>
            <ul className="hidden lg:flex gap-8 items-center justify-between">
              {pages.map(({ title, subPages }, index) => (
                <li
                  key={index}
                  className="relative group text-dark hover:text-primary transition-colors duration-500 text-[17px] font-medium "
                >
                  <Link
                    to={`/${title}`}
                    onClick={() => setActiveTab(index)}
                    className={`hover:text-primary ${
                      activeTab === index ? "text-primary" : "text-secondry"
                    } ${
                      Array.isArray(subPages) ? "flex gap-1 items-center" : ""
                    }`}
                  >
                    {title}
                    {Array.isArray(subPages) && subPages.length > 0 && (
                      <FaAngleDown />
                    )}
                  </Link>

                  {/* Only show dropdown if there are subPages */}
                  {Array.isArray(subPages) && subPages.length > 0 && (
                    <ul className="dropDown-menu">
                      {subPages.map((sub, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={`/${sub.title
                              .replace(/\s+/g, "-")
                              .toLowerCase()}`}
                            onClick={() => setActiveTab(index)}
                            className={`dropDown-item ${
                              activeTab === subIndex
                                ? "text-primary"
                                : "text-secondry"
                            }`}
                          >
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <Button title="Get Started" btnClass="hidden lg:block py-2 px-4" />
          </>
        ) : (
          <ul className="flex flex-col gap-4 bg-white max-w-dvh z-[999] w-full px-6 h-dvh mx-auto p-[12px]">
            {pages.map(({ title }, index) => (
              <li
                key={`${index}`}
                className="text-dark hover:text-primary block transition-colors duration-[0.5s] text-[17px] font-medium "
              >
                <Link
                  to={`/${title}`}
                  onClick={() => setActiveTab(index)}
                  className={
                    activeTab === index ? "text-primary" : "text-secondry"
                  }
                >
                  {title}
                </Link>
              </li>
            ))}
            <Button title="Get Started" btnClass='"py-2 px-4 w-1/2' />
          </ul>
        )}
      </nav>
    );
  };

  return (
    <>
      <main className="relative min-h-screen w-screen mt-20 md:mt-24 overflow-x-hidden mx-auto my-0">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/our-features" element={<OurFeatures />} />
            <Route path="/our-cars" element={<OurCars />} />
            <Route path="/our-Team" element={<OurTeam />} />
            <Route path="/testimonial" element={<Testimonal />} />
            <Route path="/404-page" element={<ErrorPage />} />
          </Routes>
        </div>

        <Footer />
        <ScrolltoTop />
      </main>
    </>
  );
}

export default App;
