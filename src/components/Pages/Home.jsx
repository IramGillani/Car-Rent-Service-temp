import FactsAbout from "../factsCounter";
import Features from "../Features";
import Process from "../Process";
import Banner from "../Banner";

const Home = () => {
  return (
    <>
      <section className="main-section">
        <Features />
        <FactsAbout />
        <Process />
        <Banner />
      </section>
    </>
  );
};

export default Home;
