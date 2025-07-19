import "./App.css";
import { FaCarAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { pages } from "./data.jsx";
import Button from "./components/Button.jsx";

import { useWindowScroll } from "react-use";
import gsap from "gsap";

import Home from "./components/Pages/Home";
import About from "./components/Pages/About/About.jsx";
import Blog from "./components/Pages/Blog";
import Contact from "./components/Pages/Contact";
import Service from "./components/Pages/Service";
import Pages from "./components/Pages/Pages";

import Header from "./components/Header";
import ScrolltoTop from "./components/ScrolltoTop.jsx";

import Footer from "./Footer.jsx";

function App() {
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
        className="flex inset-x-0 top-4 z-50 h-16 justify-between py-2 px-4 md:p-12  w-full items-center"
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
            <ul className=" hidden lg:flex gap-8 items-center justify-between">
              {pages.map((page, index) => (
                <li
                  key={page}
                  className="text-dark hover:text-primary transition-colors duration-[0.5s] text-[17px] font-medium"
                >
                  <Link
                    to={`/${page}`}
                    onClick={() => setActiveTab(index)}
                    className={`hover:text-primary ${
                      activeTab === index ? "text-primary" : "text-secondry"
                    }`}
                  >
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
            <Button title="Get Started" btnClass="hidden lg:block py-2 px-4" />
          </>
        ) : (
          <ul className="flex flex-col gap-4 bg-white max-w-dvh z-[999]">
            {pages.map((page, index) => (
              <li
                key={`${page}`}
                className="text-dark hover:text-primary block transition-colors duration-[0.5s] text-[17px] font-medium"
              >
                <Link
                  to={`/${page}`}
                  onClick={() => setActiveTab(index)}
                  className={
                    activeTab === index ? "text-primary" : "text-secondry"
                  }
                >
                  {page}
                </Link>
              </li>
            ))}
            <Button title="Get Started" btnClass='"py-2 px-4' />
          </ul>
        )}
      </nav>
    );
  };

  return (
    <>
      <main className="relative min-h-screen w-screen overflow-x-hidden mx-auto my-0">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
        <ScrolltoTop />
      </main>
    </>
  );
}

export default App;
