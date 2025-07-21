import SectionAbout from "./SectionAbout";
import { socialLinks } from "../data";
const CustomerSupport = () => {
  const TestimonialCard = ({ name, profession, profile }) => {
    return (
      <>
        <div className="px-6 mt-6 rounded-[10px] bg-white flex flex-col justify-end gap-6 h-auto w-full relative sm:w-[50%] md:w-md xl:w-1/4">
          <div className="relative text-center rounded-[10px] mt-[100px] bg-[#f2f2f2] hover:bg-secondry hover:bg-gradient-to-t hover:from-transparent to-[bg-secondry]  transition duration-[0.5s] z-[1] p-6 pt-0 group">
            <div className="relative overflow-hidden top-[-100px] mb-[-100px] rounded-[10px] z-[3] after:content-[''] after:absolute after:w-full after:h-0 after:top-0 after:left-0 after:rounded-[10px] after:bg-[rgba(255,255,255,0.3)]  after:z-[4] after:transition after:duration-[s] ">
              {" "}
              <img
                src={profile}
                alt="profile-img"
                className="group-hover:scale-120 transition-transform duration-[0.5s] group-hover:opacity-70 w-full h-auto max-w-full align-middle rounded-[10px] "
              />
            </div>
            <div className="relative z-[5] pt-6 group after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-0 after:z-[-1] after:rounded-[10px] after:transition-all after:duration-500 group-hover:after:h-full">
              <h4 className="font-medium mb-2 text-dark group-hover:text-white">
                {name}
              </h4>
              <p className="mb-4 duration-[0.5s] text-light group-hover:text-white">
                {profession}
              </p>
              <ul className="list-none flex items-center gap-4 justify-center ">
                {socialLinks.map(({ icon, link }) => (
                  <li key={link}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-primary focus:outline-none focus:border-[#807e7e]  focus:border-3 hover:text-white rounded-full text-primary bg-white duration-[0.5s] transition-all w-11 h-11 flex items-center justify-center"
                    >
                      {icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <section className="animate-up">
      <SectionAbout
        title="Customer Support"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,"
      />
      <div className="flex flex-wrap -mt-6 -mx-6  items-center justify-center ">
        {[
          {
            name: "MARTIN DOE",
            profession: "Tesla Employee",
            profile: "./img/team-1.jpg",
          },
          {
            name: "MARTIN DOE",
            profession: "Tesla Employee",
            profile: "./img/team-2.jpg",
          },
          {
            name: "MARTIN DOE",
            profession: "Tesla Employee",
            profile: "./img/team-3.jpg",
          },
          {
            name: "MARTIN DOE",
            profession: "Tesla Employee",
            profile: "./img/team-4.jpg",
          },
        ].map(({ profession, profile, name }, index) => (
          <TestimonialCard
            key={index}
            profession={profession}
            profile={profile}
            name={name}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerSupport;
