import FrootyLogo from "./logo";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="w-full px-20 py-16 flex flex-row justify-between gap-x-36">
      <FrootyLogo />
      <div className="flex flex-row flex-grow gap-x-12 text-xl items-center justify-around">
        <Link className="opacity-50 hover:opacity-100" to="about" spy={true} smooth={true} offset={0} duration={1000}>
          <div className="cursor-pointer">about us</div>
        </Link>
        <Link className="opacity-50 hover:opacity-100" to="service" spy={true} smooth={true} offset={0} duration={1000}>
          <div className="cursor-pointer">service</div>
        </Link>
        <Link className="opacity-50 hover:opacity-100" to="products" spy={true} smooth={true} offset={0} duration={1000}>
          <div className="cursor-pointer">products</div>
        </Link>
        <Link className="opacity-50 hover:opacity-100" to="partnership" spy={true} smooth={true} offset={0} duration={1000}>
          <div className="cursor-pointer">partnership</div>
        </Link>
        <Link className="opacity-50 hover:opacity-100" to="contact" spy={true} smooth={true} offset={0} duration={1000}>
          <div className="cursor-pointer">contact us</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
