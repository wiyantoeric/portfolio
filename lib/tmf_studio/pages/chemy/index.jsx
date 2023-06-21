import React, { Component, useRef } from "react";
import Head from "next/head";
import Navbar from "../../components/chemy/navbar";
import Hero from "../../components/chemy/hero";
import PartnerList from "../../components/chemy/partnerList";
import Banner from "../../components/chemy/banner";
import Line from "../../components/chemy/line";
import Article from "../../components/chemy/article";
import Product from "../../components/chemy/product";
import ContactForm from "../../components/chemy/contactForm";
import ScrollToTop from "../../components/chemy/topbutton";

import { useInView } from "react-intersection-observer";

const data = {
  heroContent: {
    topLeft: ["50+", "Great Products"],
    bottomLeft: ["20+", "Partnerships"],
    topRight: ["Over 200+", "Happy Customer"],
    bottomRight: ["10", "Year Established"],
  },
  partners: [
    {
      name: "Github",
      logo: "/data/chemy/logo/github.png",
    },
    {
      name: "Google",
      logo: "/data/chemy/logo/google.png",
    },
    {
      name: "Pinterest",
      logo: "/data/chemy/logo/pinterest.png",
    },
    {
      name: "Twitter",
      logo: "/data/chemy/logo/twitter.png",
    },
    {
      name: "Tik Tok",
      logo: "/data/chemy/logo/tiktok.png",
    },
  ],
  banner: {
    title: "Think like a proton",
    image: "/data/chemy/banner.png",
  },
  article: {
    title: "Hi! This is Chemy",
    description:
      'Chemy is an chemical industry of professional chemistry. The chemical industry comprises the companies that produce industrial chemicals. Central to the modern world economy, it converts raw materials (oil, natural gas, air, water, metals, and minerals) into more than 70,000 different products.\n\n A chemical is any substance that has a defined composition. In other words, a chemical is always made up of the same "stuff." Some chemicals occur in nature, such as water. Other chemicals are manufactured, such as chlorine (used for bleaching fabrics or in swimming pools).',
    image: "/data/chemy/article.png",
  },
  products: {
    title: "Take a look at our product!",
    banner: {
      title: "Eco friendly",
      backgroundImage: "/data/chemy/eco-friendly-banner.png",
      wordImage: "/data/chemy/eco-friendly-text.png",
    },
    productList: [
      {
        name: "Hot Red",
        image: "/data/chemy/hot-red.png",
      },
      {
        name: "Orangy Orange",
        image: "/data/chemy/orangy-orange.png",
      },
      {
        name: "Yellow Sunshine",
        image: "/data/chemy/yellow-sunshine.png",
      },
      {
        name: "Calm Green",
        image: "/data/chemy/calm-green.png",
      },
      {
        name: "Hot Pink",
        image: "/data/chemy/hot-pink.png",
      },
      {
        name: "Broken White",
        image: "/data/chemy/broken-white.png",
      },
    ],
  },
  contact: {
    destination: "youremail@mailhere.com",
  },
};

function ChemyPage() {
  const [navbarRef, navbarInView] = useInView();

  return (
    <>
      <Head>
        <title>Chemy</title>
      </Head>
      <main>
        <div className="w-screen flex flex-col">
          <div className="flex flex-col h-screen" id="top" ref={navbarRef}>
            {/* {breakpoint === "none" && <MobileNavbar />}
            {(breakpoint === "lg" || breakpoint === "sm") && <Navbar />} */}
            <Navbar />

            <Hero content={data.heroContent} />
          </div>
          <div>
            <PartnerList partners={data.partners} />
          </div>
          <Line />
          <Banner content={data.banner} />
          <Line />
          <div id="about">
            <Article content={data.article} />
          </div>
          <Line />
          <div id="catalog">
            <Product content={data.products} />
          </div>
          <Line />
          <div id="contact">
            <ContactForm content={data.contact} />
          </div>
          {!navbarInView && <ScrollToTop />}
        </div>
      </main>
    </>
  );
}

export default ChemyPage;
