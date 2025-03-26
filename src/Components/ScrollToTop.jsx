import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation(); // Get the current location (route)

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location]); // Trigger the scroll when the route changes

  return null; // This component doesn't render anything
}

export default ScrollToTop;
