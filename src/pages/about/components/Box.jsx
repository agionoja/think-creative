import PropTypes from "prop-types";

const Box = ({ children }) => {
  return (
    <div
      className={
        "bg-offwhite flex flex-col items-center justify-center gap-8 pb-4 pt-6 lg:gap-20 lg:pb-12 lg:pt-16"
      }
    >
      {children}{" "}
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
