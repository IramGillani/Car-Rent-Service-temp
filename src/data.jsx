import { FaPhoneAlt } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaRoad } from "react-icons/fa";
import { FaUmbrella } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
export const pages = ["Home", "About", "Service", "Blog", "Pages", "Contact"];
export const cardContent = [
  {
    title: "Phone Reservation",
    id: 0,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?",
    icon: <FaPhoneAlt />,
  },
  {
    title: "Special Rates",
    id: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?",
    icon: <FaMoneyBillAlt />,
  },
  {
    title: "One Way Rental",
    id: 2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?",
    icon: <FaRoad />,
  },
  {
    title: "Life Insurance",
    id: 3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?",
    icon: <FaUmbrella />,
  },
  {
    title: "City to City",
    id: 4,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?",
    icon: <FaBuilding />,
  },
  {
    title: "Free Rides",
    id: 5,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?",
    icon: <FaCarAlt />,
  },
];

export const clientReviews = [
  {
    id: 0,
    name: "Ellen Methew",
    profession: "CEO at Render",
    rating: 3,
    opinion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nulla natus veniam nobis perspiciatis pariatur! Reprehenderit praesentium ",
    profile: "./img/testimonial-1.jpg",
  },
  {
    id: 1,
    name: "Soha Ahn",
    profession: "Product Manager",
    rating: 2,
    opinion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nulla natus veniam nobis perspiciatis pariatur! Reprehenderit praesentium ",
    profile: "./img/testimonial-2.jpg",
  },
  {
    id: 2,
    name: "Andrew Sainz",
    profession: "Tesla Employee",
    rating: 4,
    opinion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nulla natus veniam nobis perspiciatis pariatur! Reprehenderit praesentium ",
    profile: "./img/testimonial-3.jpg",
  },
];
export const socialLinks = [
  { link: "https://www.facebook.com", icon: <FaFacebook /> },
  { link: "https://www.twitter.com", icon: <FaTwitter /> },
  { link: "https://www.instagram.com", icon: <FaInstagram /> },
  { link: "https://www.linkedin.com", icon: <FaLinkedinIn /> },
];
export const blogContent = [
  {
    src: "./img/blog-1.jpg",
    date: "30 Dec 2025",
    personName: "Martin.C",
    commentsCount: 6,
    blogTitle: "Rental Cars how to check driving fines?",
    blogDesc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.",
  },
];
