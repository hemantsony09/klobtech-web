import { motion } from "framer-motion";
import { useState } from "react";

function AnimatedNavbar() {
  const [isVisible, setIsVisible] = useState(false);

  const handleExtend = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="navbar">
      <img className="logo" src="logo.png" alt="" />
      <motion.nav
        className="nav-bar"
        animate={{ height: isVisible ? "75rem" : "5rem" }}
        transition={{ duration: 0.5 }}
      >
        <motion.ul className="nav-bar-list">
          {["About", "Menu", "Contact"].map((item) => (
            <motion.li
              key={item}
              className="relative group cursor-pointer"
              onClick={item === "Menu" ? handleExtend : undefined}
            >
              {item}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left"
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              />
            </motion.li>
          ))}
        </motion.ul>
        {isVisible && (
          <div className="extended-container">
            <motion.p
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 40 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="extended-question1"
            >
              Lorem ipsum dolor sit amet?
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 40 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="extended-answer1"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </motion.p>
          </div>
        )}
      </motion.nav>
    </div>
  );
}

export default AnimatedNavbar;
