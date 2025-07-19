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
      </div>
    </>
  );
};

export default Contact;
