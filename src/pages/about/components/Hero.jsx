const Hero = () => {
  return (
    <div className={"flex h-[33.25rem] justify-between bg-Orange"}>
      <div className={"flex w-1/2"}>
        <div className="flex items-center gap-4">
          <div className={"h-12 w-[2px] bg-white lg:h-16"} />
          <h1
            className={
              "w-60 text-3xl capitalize text-white lg:w-80 lg:text-5xl"
            }
          >
            What is Think Creative Hub?
          </h1>
        </div>
      </div>
      <div
        className={
          "z-10 hidden h-full shrink-0 basis-1/2 bg-about-hero bg-cover bg-no-repeat mix-blend-multiply lg:block"
        }
      />
    </div>
  );
};

export default Hero;
