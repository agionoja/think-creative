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
      <div className={"card bg-gray-400 lg:w-3/5"}>
        <h3
          className={
            "text-center text-2xl font-semibold capitalize lg:text-[5rem]"
          }
        >
          Our Mission
        </h3>
        <p className={"text-center"}>
          Thinkhub is a community that is built to bridge the gap between
          creativity and the society. We aim to build a community where
          creatives can find expression and experience a convenient and
          comfortable workspace..
        </p>
      </div>
    </div>
  );
};

export default Mission;
