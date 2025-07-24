import { FaMapMarker, FaPhoneAlt } from "react-icons/fa";
import { branchDetail, contactInfo, socialLinks } from "../../data";
import Button from "../Button";
import Header from "../Header";
import SectionAbout from "../SectionAbout";

const Contact = () => {
  const ContactCard = ({ icon, label, contact }) => {
    return (
      <>
        <div className="rounded-[10px] p-6 bg-[#f2f2f2] flex justify-center flex-col items-center  cursor-pointer w-full md:w-[50%] lg:w-[25%] ">
          <span className="icon-back font-extrabold text-[2em] mb-6">
            {icon}
          </span>
          <h4 className="mb-2 text-dark font-medium">{label}</h4>
          <span className="text-light">{contact}</span>
        </div>
      </>
    );
  };
  const Branch = ({ branchNum, address, phone }) => {
    return (
      <>
        <div className="rounded-[10px] p-6 bg-white w-full">
          {" "}
          <h4 className="text-dark mb-4 font-medium ">
            Our Branch {branchNum}
          </h4>
          <span className="mb-4 text-dark flex gap-2">
            Address:
            <span className="ml-2 flex gap-2 items-center">
              <FaMapMarker className="text-primary" />
            </span>{" "}
            <address className="text-light">{address}</address>
          </span>
          <p className="text-dark flex gap-2">
            Telephone:{" "}
            <span className="ml-2 flex gap-2 items-center">
              <FaPhoneAlt className="text-primary" />{" "}
              <span className="text-light">{phone}</span>
            </span>
          </p>
        </div>
      </>
    );
  };
  return (
    <>
      <Header pageTitle="Contact Us" />
      <div className="main-section">
        <SectionAbout
          title="Contact Us"
          desc="The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. Download Now."
        />
        <div className="flex items-center justify-center flex-wrap gap-4 text-center my-8 ">
          {contactInfo.map(({ icon, label, contact }) => (
            <ContactCard
              icon={icon}
              label={label}
              contact={contact}
              key={label}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 ">
          <form
            action="submit"
            className="bg-secondry rounded-[10px] p-12 xl:col-span-6"
          >
            <h4 className="text-primary font-bold mb-6">Send Your Message</h4>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-6 w-full">
                <div className="flex flex-col gap-6 xl:flex-row">
                  <input
                    type="text"
                    name=""
                    id="name"
                    placeholder="Your Name"
                    className="form-input"
                  />
                  <input
                    type="text"
                    name=""
                    id="name"
                    placeholder="Your Email"
                    className="form-input "
                  />
                </div>
                <div className="flex flex-col gap-6 xl:flex-row">
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone"
                    className="form-input"
                  />
                  <input
                    type="text"
                    name="project"
                    id="project"
                    placeholder="Your Project"
                    className="form-input"
                  />
                </div>
              </div>
              <input
                type="text"
                name=""
                id="name"
                placeholder="Subject"
                className="form-input"
              />

              <textarea
                id="message"
                name="message"
                rows="5"
                cols="50"
                className="bg-white rounded-[10px] p-4"
                onChange={(e) => e.target.value}
              ></textarea>
              <Button
                title="Send Message"
                btnClass="px-3 py-4 !bg-[#f2f2f2] !rounded-[10px] hover:!bg-primary !text-primary hover:!text-white"
              />
            </div>
          </form>
          <aside
            aria-label="Social media links"
            className="xl:col-span-1 flex justify-center items-center"
          >
            <ul className="flex items-center justify-center gap-6 my-12 xl:flex-col">
              {socialLinks.map(({ link, icon }) => (
                <li
                  className="w-[66px] h-[66px] rounded-full group bg-[#f2f2f2] flex justify-center items-center text-primary hover:bg-primary hover:text-white focus:border-4 focus:border-[#f4f4f4] border-[#f2f2f2]"
                  key={link}
                >
                  <a href={link}>{icon}</a>
                </li>
              ))}
            </ul>
          </aside>
          <div className="rounded-[10px] bg-[#f2f2f2] p-12 xl:p-8 flex gap-6  justify-center items-center flex-col xl:justify-start xl:col-span-5">
            {branchDetail.map(({ branchNum, address, phone }) => (
              <Branch
                branchNum={branchNum}
                phone={phone}
                address={address}
                key={branchNum}
              />
            ))}
          </div>
        </div>
        <div
          style={{
            maxWidth: "100%",
            overflow: "hidden",
            marginBottom: "3rem",
            marginTop: "3rem",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.0505115585!2d-74.30915477012202!3d40.69719336666681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1753321392474!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map of New York"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
