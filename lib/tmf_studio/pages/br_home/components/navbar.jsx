import Image from "next/image";
import { Component } from "react";
import Link from "next/link";

class Navbar extends Component {
  componentDidMount() {
    document.getElementById(this.props.page).className += " font-bold border-2 border-[#F522ED] rounded-full h-[90%] flex items-center justify-center";
  }

  render() {
    return (
      <div className="flex flex-wrap justify-between bg-[#FBF45C] py-10 pl-14 pr-20">
        <div className="flex justify-self-start">
          <Image width={81} height={55} src={`/tmf-studio/index/br-logo1.png`} />
        </div>
        <ul className="flex flex-row gap-x-8 items-center">
          <li className="w-36 text-center" id="about">
            <Link href="/br/landing">
              <a className="hover:font-bold before:block before:overflow-hidden before:font-bold before:invisible before:h-0 duration-50 font-century_gothic text-lg cursor-pointer" onClick={() => this.onClick("about")}>
                about
              </a>
            </Link>
          </li>
          <li className="w-36 text-center" id="services">
            <Link href="/br/services">
              <a className="hover:font-bold before:block before:overflow-hidden before:font-bold before:invisible before:h-0 duration-50 font-century_gothic text-lg cursor-pointer" onClick={() => this.onClick("services")}>
                services
              </a>
            </Link>
          </li>
          <li className="w-36 text-center" id="works">
            <Link href="/br/works">
              <a className="hover:font-bold before:block before:overflow-hidden before:font-bold before:invisible before:h-0 duration-50 font-century_gothic text-lg cursor-pointer" onClick={() => this.onClick("works")}>
                works
              </a>
            </Link>
          </li>
          <li className="w-36 text-center" id="team">
            <Link href="/br/team">
              <a className="hover:font-bold before:block before:overflow-hidden before:font-bold before:invisible before:h-0 duration-50 font-century_gothic text-lg cursor-pointer" onClick={() => this.onClick("team")}>
                team and I
              </a>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
