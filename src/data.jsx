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
import { FaMapMarker } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaGasPump } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
export const pages = [
  { title: "Home" },
  { title: "About" },
  { title: "Service" },
  { title: "Blog" },
  {
    title: "Pages",
    subPages: [
      { title: "Our Features" },
      { title: "Our Cars" },
      { title: "Our Team" },
      { title: "Testimonial" },
      { title: "404 Page" },
    ],
  },
  { title: "Contact" },
];
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
  {
    src: "./img/blog-2.jpg",
    date: "25 Dec 2025",
    personName: "Martin.C",
    commentsCount: 6,
    blogTitle: "Rental cost of sport and other cars",
    blogDesc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.",
  },
  {
    src: "./img/blog-3.jpg",
    date: "27 Dec 2025",
    personName: "Martin.C",
    commentsCount: 6,
    blogTitle: "Document required for car rental",
    blogDesc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.",
  },
];
export const contactInfo = [
  {
    contact: "123 Street, New York, USA",
    icon: <FaMapMarker />,
    label: "Address",
  },

  { contact: "info@example.com", icon: <FaEnvelope />, label: "Mail Us" },
  { contact: "+012 345 67890", icon: <FaPhone />, label: "Telephone" },
  { contact: "+012 345 67899", icon: <FaPrint />, label: "Yoursite@ex.com" },
];
export const branchDetail = [
  {
    branchNum: "01",
    address: "123 Street New York.USA",
    phone: "(+012) 3456 7890",
  },
  {
    branchNum: "02",
    address: "123 Street New York.USA",
    phone: "(+012) 3456 7890",
  },
  {
    branchNum: "03",
    address: "123 Street New York.USA",
    phone: "(+012) 3456 7890",
  },
];
export const carInfo = [
  {
    name: "Toyota Corolla Cross",
    review: "3.5",
    img: "./img/car-1.png",
    rent: "128:00",
    subInfo: [
      { label: 4, icon: <FaUsers /> },
      { label: 2015, icon: <FaCarAlt /> },

      { label: "petrol", icon: <FaGasPump /> },
      { label: "27K", icon: <FaCarAlt /> },
      { label: "auto", icon: <FaCogs /> },
      { label: "AT/MT", icon: <FaRoad /> },
    ],
  },
  {
    name: "Tesla Model S Plaid",
    img: "./img/car-2.png",
    review: "3.8",
    rent: "128:00",
    subInfo: [
      { label: 4, icon: <FaUsers /> },
      { label: 2015, icon: <FaCarAlt /> },

      { label: "petrol", icon: <FaGasPump /> },
      { label: "27K", icon: <FaCarAlt /> },
      { label: "auto", icon: <FaCogs /> },
      { label: "AT/MT", icon: <FaRoad /> },
    ],
  },
  {
    name: "Hyundai Kona Electric",
    img: "./img/car-3.png",
    review: "3.5",
    rent: "128:00",
    subInfo: [
      { label: 4, icon: <FaUsers /> },
      { label: 2015, icon: <FaCarAlt /> },

      { label: "petrol", icon: <FaGasPump /> },
      { label: "27K", icon: <FaCarAlt /> },
      { label: "auto", icon: <FaCogs /> },
      { label: "AT/MT", icon: <FaRoad /> },
    ],
  },
  {
    name: "Mercedes Benz R3",
    review: "4.8",
    rent: "128:00",
    img: "./img/car-4.png",
    subInfo: [
      { label: 4, icon: <FaUsers /> },
      { label: 2015, icon: <FaCarAlt /> },

      { label: "petrol", icon: <FaGasPump /> },
      { label: "27K", icon: <FaCarAlt /> },
      { label: "auto", icon: <FaCogs /> },
      { label: "AT/MT", icon: <FaRoad /> },
    ],
  },
];
