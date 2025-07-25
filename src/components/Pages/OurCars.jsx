import { useState } from "react";
import SectionAbout from "../SectionAbout";
import Header from "../Header";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { carInfo } from "../../data";
import Button from "../Button";
import Process from "../Process";
import Banner from "../Banner";

const OurCars = () => {
  const SlideButton = ({ title, btnClass, onSlide }) => (
    <button
      onClick={onSlide}
      className={`text-white rounded-pill bg-primary transition-all duration-[0.5s] hover:bg-secondry capitalize font-semibold cursor-pointer ${btnClass} `}
    >
      {title}
    </button>
  );

  const length = carInfo.length;
  const [current, setCurrent] = useState(0);
  const previous = () => setCurrent(current === 0 ? length - 1 : current - 1);
  const next = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const VehicleList = ({ vehicleImg, vehicle, review, rent, subInfo }) => {
    return (
      <>
        <div className="rounded-[10px] p-6 border-secondry hover:border-primary transition duration[0.5s] bg-white group border md:col-span-2">
          <div className="group-hover:shadow-lg group-hover:shadow-primary   ">
            <header className="bg-[#f2f2f2] mb-2 flex justify-center items-center">
              <img src={vehicleImg} alt="" />
            </header>
            <div className="bg-[#f2f2f2] text-center p-6">
              <h4 className="lg:text-[1.5rem] text-dark mb-2 font-medium">
                {vehicle}
              </h4>
              <div className="flex items-center justify-center mb-6">
                <p className="mr-4">{review} Review</p>
                <span className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`${
                        index < Math.round(review)
                          ? "text-secondry"
                          : "text-light"
                      }`}
                    />
                  ))}
                </span>
              </div>
              <span className="rounded-pill bg-white py-2 px-6 text-primary font-mediu ">
                <h4 className="inline">${rent}/Day</h4>
              </span>
              <div className="my-6 grid grid-cols-3 gap-2">
                {subInfo.map(({ label, icon }, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex justify-between items-center gap-1">
                      {" "}
                      <span>{icon}</span> <span>{label}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Button title="Book now" btnClass="py-4 font-semibold px-12" />
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Header pageTitle="Cars" />
      <section className="main-section">
        <SectionAbout
          title="Vehicle Categories"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,"
        />
        <section>
          <div className="flex items-center justify-between ">
            <SlideButton
              onSlide={() => setCurrent(previous)}
              btnClass=" py-[10px] px-[35px]"
              title={<FaChevronLeft className=" text-white" />}
            ></SlideButton>
            <SlideButton
              onSlide={() => setCurrent(next)}
              btnClass=" py-[10px] px-[35px]"
              title={<FaChevronRight className="text-white" />}
            ></SlideButton>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 items-center justify-center ">
            {carInfo
              .slice(current, current + 2)
              .map(({ name, img, review, rent, subInfo }) => (
                <VehicleList
                  key={name}
                  rent={rent}
                  vehicle={name}
                  rating={2}
                  review={review}
                  vehicleImg={img}
                  subInfo={subInfo}
                />
              ))}
          </div>
        </section>
        <section>
          <Process />
        </section>
        <section>
          <Banner />
        </section>
      </section>
    </>
  );
};

export default OurCars;
