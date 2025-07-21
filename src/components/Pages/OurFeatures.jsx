import Banner from "../Banner";
import FactsAbout from "../factsCounter";
import Header from "../Header";
import Features from "../Features";

const OurFeatures = () => {
  return (
    <>
      <Header pageTitle="Features" />
      <section className="main-section">
        <Features />
      </section>
      <FactsAbout />
      <section>
        <Banner />
      </section>
    </>
  );
};

export default OurFeatures;
