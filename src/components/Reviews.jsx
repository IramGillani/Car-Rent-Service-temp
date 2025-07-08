import SectionAbout from "./SectionAbout";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import { clientReviews } from "../data";
import { useState, useEffect } from "react";

const Reviews = () => {
  const Carousel = ({ autoSlide = false, autoSlideInterval = 3000 }) => {
    const [current, setCurrent] = useState(0);
    const length = clientReviews.length;

    const previous = () => setCurrent(current === 0 ? length - 1 : current - 1);
    const next = () => setCurrent(current === length - 1 ? 0 : current + 1);

    useEffect(() => {
      if (!autoSlide) return;
      const slideInterval = setInterval(next, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval, current]);

    const TestimonialCard = ({
      rating,
      profile,
      id,
      profession,
      opinion,
      name,
    }) => (
      <div className="shadow-md border-1 rounded-[10px] relative transition-transform ease-out duration-500 opacity-100">
        <span className="bg-dark absolute flex items-center justify-center right-8 -top-8 rounded-full w-[70px] h-[70px]">
          <FaQuoteRight className="text-[2em]" />
        </span>
        <header className="p-6 bg-[#f2f2f2] flex gap-4 rounded-t-[10px]">
          <img
            src={profile}
            alt="profile-pic"
            className="w-25 h-25 rounded-full border-3 border-white"
          />
          <div className="flex flex-col gap-3">
            <h4 className="font-medium">{name}</h4>
            <span className="text-light font-lato">{profession}</span>
            <span className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={i < rating ? "text-primary" : "text-gray-400"}
                />
              ))}
            </span>
          </div>
        </header>
        <div className="p-6 flex items-center justify-center font-lato text-light">
          <p>{opinion}</p>
        </div>
      </div>
    );

    return (
      <div className="flex gap-6 flex-col md:mx-auto px-7 sm:px-8">
        {clientReviews.map(
          (item) =>
            item.id === current && (
              <TestimonialCard
                key={item.id}
                rating={item.rating}
                profile={item.profile}
                id={item.id}
                profession={item.profession}
                opinion={item.opinion}
                name={item.name}
              />
            )
        )}
        <div className="flex gap-6 items-center justify-center">
          {clientReviews.map((_, index) => (
            <label key={index} className="cursor-pointer">
              <input
                type="radio"
                name="testimonial"
                checked={current === index}
                onChange={() => setCurrent(index)}
                className="hidden"
              />
              <span
                className={`inline-block w-8 h-8 rounded-full border-8 transition-all ${
                  current === index
                    ? "bg-primary border-secondry"
                    : "bg-white border-primary"
                }`}
              ></span>
            </label>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section>
      <SectionAbout
        title="Reviews"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,"
      />
      <Carousel autoSlide={true} />
    </section>
  );
};

export default Reviews;
