import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={"flex justify-between bg-Orange text-white"}>
      <div
        className={
          "flex flex-col gap-6 p-4 lg:w-1/2 lg:justify-center lg:px-12"
        }
      >
        <div className="flex items-center gap-4">
          <div
            className={"h-14 w-1 rounded-bl-xl rounded-tl-xl bg-white lg:h-20"}
          />
          <h1
            className={
              "flex flex-col gap-0.5 text-3xl font-semibold capitalize lg:gap-2 lg:text-5xl"
            }
          >
            <span>What is think</span>
            <span>creative hub?</span>
          </h1>
        </div>
        <p className={"text-[1rem]"}>
          Thinkhub's mission is to build a community where young people can
          express their creativity. Founded in 2024, Thinkhub empowers young
          creatives in Jos, Nigeria, under the leadership of experienced
          professionals in digital marketing, content creation, and
          entrepreneurship. The team is committed to fostering collaboration and
          providing opportunities for young talents to thrive.
        </p>
        <Link to="/" className={"btn mt-8"}>
          Explore
        </Link>
      </div>
      <div
        className={
          "z-10 hidden h-[33.25rem] shrink-0 basis-1/2 bg-about-hero bg-cover bg-no-repeat mix-blend-multiply lg:block"
        }
      />
    </div>
  );
};

export default Hero;
