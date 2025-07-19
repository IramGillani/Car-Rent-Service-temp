import { Link } from "react-router-dom";
const Header = ({ pageTitle }) => {
  return (
    <header className="bg-breadcrumb text-white flex items-center justify-center flex-col p-[60px] gap-8 min-h-[50vh] mb-12 ">
      <h1 className="text-center font-bold text-md md:text-5xl w-full animate-down">
        Our {pageTitle}
      </h1>
      <div>
        {["Home", "Pages", `${pageTitle}`].map((tab) => (
          <Link
            to={`/${tab}`}
            key={tab}
            className={`ml-2 ${tab === pageTitle && "text-primary"}`}
          >
            {tab} /
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
