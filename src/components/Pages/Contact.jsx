import { contactInfo } from "../../data";
import Header from "../Header";
import SectionAbout from "../SectionAbout";

const Contact = () => {
  return (
    <>
      <Header pageTitle="Contact Us" />
      <div className="main-section">
        <SectionAbout
          title="Contact Us"
          desc="The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. Download Now."
        />
        <div className="flex items-center justify-center flex-wrap  gap-4 text-center my-8">
          {contactInfo.map(({ icon, label, contact }) => (
            <div className="rounded-[10px] p-6 bg-[#f2f2f2] items-center  cursor-pointer">
              <span className="icon-back font-extrabold text-[2em] mb-6">
                {icon}
              </span>
              <h4 className="mb-2 text-dark">{label}</h4>
              <span className="text-light">{contact}</span>
            </div>
          ))}
        </div>
        <form action="" className="bg-secondry rounded-[10px] p-12">
          <h4 className="text-primary font-bold mb-6">Send Your Message</h4>
          <div>
            <input
              type="text"
              name=""
              id="name"
              placeholder="Your Name"
              className="py-4 px-6 rounded-[10px] w-full text-light bg-white"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
