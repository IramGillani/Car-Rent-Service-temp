import { Link } from "react-router-dom";

const Button = ({ title, btnClass }) => {
  return (
    <button
      className={`text-white rounded-pill bg-primary transition-all duration-[0.5s] hover:bg-secondry capitalize font-semibold cursor-pointer ${btnClass} `}
    >
      <Link to={"/"}>{title}</Link>
    </button>
  );
};

export default Button;
