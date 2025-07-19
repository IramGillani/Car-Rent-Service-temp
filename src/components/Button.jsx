const Button = ({ title, btnClass }) => {
  return (
    <button
      className={`text-white rounded-pill bg-primary transition-all duration-[0.5s] hover:bg-secondry font-semibold cursor-pointer ${btnClass} `}
    >
      {title}
    </button>
  );
};

export default Button;
