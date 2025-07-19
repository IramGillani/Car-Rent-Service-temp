const SectionAbout = ({
  title,
  desc,
  sectionClass = "",
  hClass,
  pclass = "",
}) => {
  return (
    <>
      <div className={`text-center ${sectionClass} `}>
        <h2>
          <span className={`"text-dark font-bold ${hClass}`}>Cental </span>
          <span className="text-primary font-bold">{title}</span>
        </h2>
        <p
          className={`text-light pb-[3rem] max-w-3xl text-center mx-auto tracking-tight ${pclass} text-sm md:text-base`}
        >
          {desc}
        </p>
      </div>
    </>
  );
};

export default SectionAbout;
