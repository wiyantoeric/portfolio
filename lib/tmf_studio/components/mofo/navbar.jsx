import MofoOrangeLogo from "./mofoOrangeLogo";
import Link from "next/link";
import React, { Component } from "react";

class Navbar extends Component {
  componentDidMount() {
    document.getElementById(this.props.page).classList.add("font-bold");
  }

  render() {
    return (
      <div className="w-full px-20 py-12 flex flex-row items-center justify-between border-black border-b-2">
        <MofoOrangeLogo />
        <div className="flex flex-row gap-x-36">
          <div className="hover:font-bold before:block before:content-['about'] before:overflow-hidden before:font-bold before:invisible before:h-0 duration-50 text-lg" id="about">
            <Link href="/">about</Link>
          </div>
          <div className="hover:font-bold before:block before:content-['website'] before:overflow-hidden before:font-bold before:invisible before:h-0 duration-50 text-lg" id="website">
            <Link href="/website">website</Link>
          </div>
          <div className="hover:font-bold before:block before:content-['branding'] before:overflow-hidden before:font-bold before:invisible before:h-0 duration-50 text-lg" id="branding">
            <Link href="/branding">branding</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
