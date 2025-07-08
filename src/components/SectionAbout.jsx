const SectionAbout = ({ title, desc }) => {
  return (
    <>
      <div className="text-center">
        <h2>
          <span className="text-dark">Cental </span>
          <span className="text-primary">{title}</span>
        </h2>
        <p className="text-[#6e7684] pb-[3rem] max-w-3xl text-center mx-auto">
          {desc}
        </p>
      </div>
    </>
  );
};

export default SectionAbout;
