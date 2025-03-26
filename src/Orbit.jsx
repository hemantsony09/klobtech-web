import { motion } from "framer-motion";
import PropTypes from "prop-types";
const MainCircle = ({
  mainRadius,
  childRadius1,
  childRadius2,
  distance1,
  distance2,
  speed1, // Speed of first orbiting circle (in seconds)
  speed2, // Speed of second orbiting circle (in seconds)
  top,
  left,
  color1,
  color2,
}) => {
  // Animation settings for the revolving effect
  const getOrbitAnimation = (duration) => ({
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: duration,
      ease: "linear",
    },
  });

  return (
    <motion.div
      drag
      dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
      dragElastic={0.1}
      style={{
        position: "absolute",
        width: `${mainRadius * 2}px`,
        height: `${mainRadius * 2}px`,
        borderRadius: "50%",
        backgroundColor: "var(--accent-color)",
        // backgroundImage:
        //   "linear-gradient(200deg,#787ae5 25%, #b182ca 40%, #ed6d95 60% )",
        // margin: "50px auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        top: top,
        left: left,
        opacity: "0.9",
        backdropFilter: "blur(10px)",
        // -webkit-backdrop-filter: blur(7px);
        // border: "6px solid black",
        zIndex: "0",
      }}
    >
      {/* Orbit 1 */}
      <motion.div
        style={{
          position: "absolute",
          width: `${distance1 * 2}px`,
          height: `${distance1 * 2}px`,
          borderRadius: "50%",
          border: "1px dashed transparent",
          top: `calc(50% - ${distance1}px)`,
          left: `calc(50% - ${distance1}px)`,
        }}
        animate={getOrbitAnimation(speed1)}
      >
        <motion.div
          style={{
            position: "absolute",
            width: `${childRadius1 * 2}px`,
            height: `${childRadius1 * 2}px`,
            backgroundColor: color1,
            borderRadius: "50%",
            top: `0`,
            left: `50%`,
            transform: "translate(-50%, -50%)",
            border: "0px solid black",
          }}
        />
      </motion.div>

      {/* Orbit 2 */}
      <motion.div
        style={{
          position: "absolute",
          width: `${distance2 * 2}px`,
          height: `${distance2 * 2}px`,
          borderRadius: "50%",
          border: "0px solid black",
          top: `calc(50% - ${distance2}px)`,
          left: `calc(50% - ${distance2}px)`,

          // zIndex: "-2",
        }}
        animate={getOrbitAnimation(speed2)}
      >
        <motion.div
          style={{
            position: "absolute",
            width: `${childRadius2 * 2}px`,
            height: `${childRadius2 * 2}px`,

            borderRadius: "50%",
            top: `0`,
            left: `50%`,
            transform: "translate(-50%, -50%)",
            border: "0px solid #333",
            backgroundColor: "#f4f4f4",
            // backgroundImage:
            //   "linear-gradient(200deg,#ed6d95 25%, #b182ca 40%, #787ae5 60% )",
            backdropFilter: "blur(17px)",
            WebkitBackdropFilter: "blur(15px)",
            // backgroundColor: "rgba(255, 175, 204, 0.5)",
            zIndex: "-9",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

MainCircle.propTypes = {
  mainRadius: PropTypes.number,
  childRadius1: PropTypes.number,
  childRadius2: PropTypes.number,
  distance1: PropTypes.number,
  distance2: PropTypes.number,
  speed1: PropTypes.number,
  speed2: PropTypes.number,
};
export default MainCircle;
