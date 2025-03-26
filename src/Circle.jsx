import { motion } from "framer-motion";
function Circle({ top, left, color, scale }) {
  const handleClick = () => {
    console.log("hello");
  };
  return (
    <motion.div
      onClick={handleClick}
      drag
      dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
      dragElastic={0.1}
      style={{
        height: "20rem",
        width: "20rem",
        borderRadius: "50%",
        backgroundColor: color,
        position: "absolute",
        left: left,
        top: top,
        cursor: "pointer",
        scale: scale,
        border: "0px solid black",
        zIndex: "0",
      }}
      className="circle"
    ></motion.div>
  );
}

export default Circle;
