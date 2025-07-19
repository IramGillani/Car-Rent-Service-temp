import { FaAngleRight } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { FaMapMarker } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import { socialLinks } from "./data";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;

    gsap.fromTo(
      el,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,

        duration: 1.2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <footer
      className="mx-auto w-full py-12 px-3 md:px-8 bg-dark "
      ref={scrollRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12 py-12 px-3">
        <div className="flex flex-col gap-4 items-start">
          <h4>About Us</h4>
          <p>
            Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit consectetur adipiscing
            elit.
          </p>
          <label htmlFor="Email" className="relative  w-full">
            {" "}
            <input
              type="text"
              placeholder="Enter your Email"
              className="bg-white py-4 pr-12 pl-6 w-full rounded-[50rem] "
            />
            <button className="transition  duration-[0.5s] font-[600] py-2  px-3 rounded-[50rem] mr-2 mt-2 absolute top-0 right-0 bg-secondry hover:bg-primary cursor-pointer text-white">
              Subscribe
            </button>
          </label>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul className="flex flex-col leading-9 text-secondry  ">
            {[
              "About",
              "Car",
              "Car Types",
              "Team",
              "Contact us",
              "Terms & Conditions",
            ].map((link) => (
              <li
                key={link}
                className="flex items-center gap-4 hover:tracking-[1px] transition-all duration-[0.5s] hover:text-primary text-[#6c757d]"
              >
                <FaAngleRight /> {link}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2 ">
          <h4>Business Hours</h4>
          <div className="flex flex-col gap-0.5 ">
            <span className="day">Mon - Friday:</span>
            <span className="time">09.00 am to 07.00 pm</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="day">Saturday:</span>
            <span className="time">10.00 am to 05.00 pm</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="day">Vacation:</span>
            <span className="time">All Sunday is our vacation</span>
          </div>
        </div>
        <div className="text-secondry flex flex-col">
          <h4>Contact Info</h4>
          <div className="flex flex-col mb-4 ">
            {[
              { contact: "123 Street, New York, USA", icon: <FaMapMarker /> },

              { contact: "info@example.com", icon: <FaEnvelope /> },
              { contact: "+012 345 67890", icon: <FaPhone /> },
              { contact: "+012 345 67899", icon: <FaPrint /> },
            ].map(({ contact, icon }) => (
              <a
                href="#"
                className="flex gap-2 items-center hover:text-primary group"
                key={contact}
              >
                {icon}
                <span className="group-hover:text-primary group-hover:tracking-[1px] duration-[0.5s] transition-all">
                  {contact}{" "}
                </span>
              </a>
            ))}
          </div>
          <div className="flex gap-4 items-center">
            {socialLinks.map(({ icon, link }) => (
              <a
                key={link}
                href={link}
                className="bg-secondry rounded-full text-white hover:bg-primary duration-[0.5s] transition-all w-11 h-11 flex items-center justify-center"
                target="_blank"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <span className="flex items-center gap-1">
        <FaCopyright />
        <a href="#" className="text-white underline">
          CENTAL
        </a>
        All right reserved.
      </span>
    </footer>
  );
};

export default Footer;
