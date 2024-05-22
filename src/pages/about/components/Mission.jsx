const Mission = () => {
  return (
    <div className={"flex flex-col gap-8 px-4 lg:gap-20"}>
      <h2
        className={
          "flex flex-col text-center text-2xl font-medium lg:gap-3 lg:text-[2.5rem]"
        }
      >
        <span> Our mission is to redefine</span>
        <span>the creative community.</span>
      </h2>
      <div className={"card bg-[#CFCCCC] lg:w-3/5"}>
        <h3
          className={
            "text-center text-2xl font-semibold capitalize lg:text-[5rem]"
          }
        >
          Our Mission
        </h3>
        <p className={"text-center"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor sed
          vitae posuere lectus sit tempus dui. Purus diam elit vitae scelerisque
          sem rutrum ut pharetra, a. Venenatis tellus vivamus scelerisque
          egestas lacus faucibus cursus. Eu leo elementum hendrerit gravida et
          ultricies at. Ut elementum accumsan ut elit. Egestas sit senectus et
          blandit. Ut.
        </p>
      </div>
    </div>
  );
};

export default Mission;
