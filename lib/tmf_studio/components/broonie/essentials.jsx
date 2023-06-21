import React, { Component, ReactDOM } from "react";
import Head from "next/head";
import AsyncImage from "../general/asyncImage";
import FloatingButton from "../general/floatingButton";
import NavBar from "../general/navbar";
import useBreakpoint from "use-breakpoint";
import Link from "next/link";
import styles from "../../../styles/Broonie.module.css";

class Container extends Component {
  // Parameter : pageTitle
  render() {
    return (
      <div className="font-popppins text-broonie-blue">
        <Head>
          <title>{this.props.pageTitle}</title>
        </Head>
        {this.props.children}
      </div>
    );
  }
}
const safeDocument = typeof document !== "undefined" ? document : {};

function showMobileNavBar() {
  const mobileNavbar = document.getElementById("navbar");
  const mobileScreen = document.getElementById("black-screen");
  const html = safeDocument.documentElement;
  const { body } = safeDocument;

  mobileScreen.classList.remove("hidden");
  // mobileNavbar.classList.remove("-right-full");
  // mobileNavbar.classList.add("right-0");
  mobileNavbar.classList.remove("hidden");

  html.style.position = "relative";
  html.style.overflow = "hidden";
  body.style.position = "relative";
  body.style.overflow = "hidden";
}

function hideMobileNavBar() {
  const mobileNavbar = document.getElementById("navbar");
  const mobileScreen = document.getElementById("black-screen");
  const html = safeDocument.documentElement;
  const { body } = safeDocument;

  mobileScreen.classList.add("hidden");
  mobileNavbar.classList.add("hidden");

  html.style.position = "";
  html.style.overflow = "";
  body.style.position = "";
  body.style.overflow = "";
}

class ResponsiveNavBar extends Component {
  // Parameter : page
  breakpoint = { none: 0, sm: 640, lg: 1024 };

  RNavbar = ({ page }) => {
    const { breakpoint } = useBreakpoint(this.breakpoint, this.breakpoint.lg);

    if (breakpoint === "none" || breakpoint === "sm") {
      return (
        <div>
          <div onClick={() => showMobileNavBar(page)} className="cursor-pointer fixed top-12 z-50 right-8 h-fit">
            <svg width="7" height="15" viewBox="0 0 7 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="3.5" cy="3.5" r="3.5" fill="white" />
              <circle cx="3.5" cy="11.5" r="3.5" fill="white" />
            </svg>
          </div>
          <div id="black-screen" className="cursor-pointer hidden fixed top-0 left-0 h-screen w-screen z-40 bg-black opacity-40" onClick={() => hideMobileNavBar()}></div>
          <div id="navbar" className="hidden fixed top-0 right-0 z-50 h-screen w-5/12 bg-blue-300">
            <div className="flex flex-col my-12 gap-x-40 text-xl h-screen font-medium">
              <div className="ml-8 my-4 w-fit">
                <Link href="/template/broonie/about">
                  <a onClick={() => hideMobileNavBar(page)} className={styles.link} id="about">
                    about
                  </a>
                </Link>
              </div>
              <div className="ml-8 my-4 w-fit">
                <Link href="/template/broonie/products">
                  <a onClick={() => hideMobileNavBar(page)} className={styles.link} id="products">
                    products
                  </a>
                </Link>
              </div>
              <div className="ml-8 my-4 w-fit">
                <Link href="/template/broonie/contact">
                  <a onClick={() => hideMobileNavBar(page)} className={styles.link} id="contact">
                    contact
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <NavBar page={this.props.page} />;
    }
  };

  render() {
    return <this.RNavbar page={this.props.page} />;
  }
}

class ImageMain extends Component {
  // Parameter : imageUrl, imageAlt, page, floatingLink (additional)
  render() {
    return (
      <main>
        <div className="flex flex-col lg:flex-row">
          <div className="w-screen lg:w-1/2 lg:h-screen">
            <AsyncImage imageUrl={this.props.imageUrl} alt={this.props.imageAlt} />
          </div>
          <div className="w-full lg:w-1/2 rows-2 overflow-y-auto flex flex-col lg:h-screen" id="container">
            {/* <NavBar page={this.props.page} /> */}
            <ResponsiveNavBar page={this.props.page} />

            {/* Children content */}
            {this.props.children}

            {this.props.floatingLink && <FloatingButton floatingLink={this.props.floatingLink} />}
          </div>
        </div>
      </main>
    );
  }
}

export { Container, ImageMain };
