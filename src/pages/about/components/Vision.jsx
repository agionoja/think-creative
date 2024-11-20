const Vision = () => {
  return (
    <div className={"flex flex-col gap-8 px-4 lg:gap-20"}>
      <div className={"card bg-gray-700 lg:w-[70%] lg:px-28"}>
        <h3
          className={
            "text-center text-2xl font-semibold capitalize text-white lg:text-[5rem]"
          }
        >
          Our Vision
        </h3>
        <p className={"flex flex-col gap-4 text-center text-white"}>
          <span>
            Our vision is to cultivate a dynamic and inclusive ecosystem where
            young voices are amplified through creative expression, fostering a
            generation of confident innovators and storytellers. Through
            collaborative workshops, digital platforms, and community events, we
            aim to break down barriers to creative education and build bridges
            between emerging talents and established artists.
          </span>
          <span>
            We believe in the transformative power of creativity to shape
            identities, challenge perspectives, and drive positive social
            change. By nurturing emotional intelligence, critical thinking, and
            entrepreneurial spirit, we strive to empower young creators to
            discover their artistic voice and contribute to a more vibrant,
            compassionate global culture.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Vision;
