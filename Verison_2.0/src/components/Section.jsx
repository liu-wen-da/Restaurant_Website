

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <div
      id={id}
      className={`
        relative 
        ${customPaddings || `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`} 
        ${className || ""}
      `}
    >
      {children}

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-black ${
              crossesOffset ? crossesOffset : ""
            } pointer-events-none lg:block xl:left-10 xl:right-10`}
          />

        </>
      )}
    </div>
  );
};

export default Section;