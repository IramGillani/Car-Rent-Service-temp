import { FaBars } from "react-icons/fa";
import { pages } from "../data";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <ul className="hidden lg:flex gap-4 ">
      {pages.map((page) => (
        <li
          key={page}
          className="text-dark hover:text-primary transition-colors duration-[0.5s] text-[17px] font-medium"
        >
          <Link to={`/${page}`}>{page}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
