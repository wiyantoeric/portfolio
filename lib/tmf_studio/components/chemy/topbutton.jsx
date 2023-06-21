import { motion } from "framer-motion";
import { Link } from "react-scroll";

function ScrollToTop() {
  return (
    <Link activeClass="active" to="top" spy={true} smooth={true} offset={0} duration={1000}>
      <motion.div
        className="w-12 h-12 fixed bottom-10 right-10 bg-gray-900 flex items-center hover:bg-gray-700 cursor-pointer transition-transform group"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 2, opacity: 1 }}
        transition={{ duration: 0.15, ease: "linear" }}
      >
        <div className="w-fit h-fit mx-auto group-hover:scale-125 transition-transform">
          <svg width="24" height="12" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.41 7.41L6 2.83L10.59 7.41L12 6L6 0L0 6L1.41 7.41Z" fill="white" />
          </svg>
        </div>
      </motion.div>
    </Link>
  );
}

export default ScrollToTop;
