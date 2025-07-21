import Button from "../Button";
import Header from "../Header";
import { BsExclamationTriangle } from "react-icons/bs";

const ErrorPage = () => {
  return (
    <>
      <Header pageTitle="404 Page" />
      <section className="main-section bg-[#f2f2f2]">
        <div className="py-8 mx-auto text-dark flex justify-center flex-wrap">
          <div className="px-6 flex flex-col items-center justify-center animate-up md:w-1/2 ">
            {" "}
            <BsExclamationTriangle
              className="text-primary text-2xl lg:text-[5rem] "
              style={{ fontSize: "calc(1.625rem + 4.5vw)" }}
            />
            <h1
              className="lg:text-[5rem] font-bold leading-[1.2]"
              style={{
                fontSize: "calc(1.625rem + 4.5vw)",
              }}
            >
              404
            </h1>
            <h1 className="mb-6 lg:text-[2.5rem] font-medium">
              Page Not Found
            </h1>
            <p className="mb-6 text-sm text-light text-center">
              We’re sorry, the page you have looked for does not exist in our
              website! Maybe go to our home page or try to use a search?
            </p>
            <Button title="Go back to home" btnClass="py-4 px-12" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
