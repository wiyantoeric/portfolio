import Navbar from "../../components/frooty/navbar.jsx";
import Hero from "../../components/frooty/hero.jsx";
import About from "../../components/frooty/about.jsx";
import Services from "../../components/frooty/services.jsx";
import Partners from "../../components/frooty/partners.jsx";
import Products from "../../components/frooty/products.jsx";
import Contact from "../../components/frooty/contact.jsx";
import Footer from "../../components/frooty/footer.jsx";
import Head from "next/head";

const data = {
  hero: {
    title: "Let's Create Healthy Habits.",
    image: "/data/frooty/banner.png",
  },
  about: {
    title: "We think that we love junkfoods more than fruits.",
    paragraph1:
      "Fruits are an excellent source of essential vitamins and minerals, and they are high in fiber. Fruits also provide a wide range of health-boosting antioxidants, including flavonoids. Eating a diet high in fruits and vegetables can reduce a person’s risk of developing heart disease, cancer, inflammation, and diabetes.",
    paragraph2: "Citrus fruits and berries may be especially powerful for preventing disease. A 2014 study Trusted Source ranked “powerhouse” fruit and vegetables by high nutrient density and low calories.",
    paragraph3:
      "For example, Lemons are a citrus fruit that people often use in traditional remedies because of their health benefits. Like other citrus fruits, they contain vitamin C and other antioxidants. Antioxidants are essential for human health. These compounds mop up free radicals in the body that can damage the body’s cells and lead to diseases, such as cancers.",
  },
  services: {
    title: "We recommend you all the healthy yet fresh fruits.",
    description: "Check out our offline store in Jakarta, Bandung, and Bogor!",
  },
  products: {
    title: "Here’s our products\n that loved by customer!",
    description: "Everyday we sold over 7000+ fruits, so every fruit is a fresh product.",
    productList: [
      {
        name: "Apple",
        price: 9000,
        image: "/data/frooty/apple.png",
        link: "https://google.com",
      },
      {
        name: "Apple",
        price: 9000,
        image: "/data/frooty/apple.png",
        link: "https://google.com",
      },
      {
        name: "Apple",
        price: 9000,
        image: "/data/frooty/apple.png",
        link: "https://google.com",
      },
      {
        name: "Apple",
        price: 9000,
        image: "/data/frooty/apple.png",
        link: "https://google.com",
      },
      {
        name: "Apple",
        price: 9000,
        image: "/data/frooty/apple.png",
        link: "https://google.com",
      },
      {
        name: "Apple",
        price: 9000,
        image: "/data/frooty/apple.png",
        link: "https://google.com",
      },
    ],
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
  contact: {
    title: "Any Questions?\nWe would love to help!",
    description: "Contact us and we will get back to you within 24 hours.",
  },
  footer: {
    web: "frootyhealthy.com",
    email: "frootyhealthy@gmail.com",
    contactNumber: "+62 718293472",
  },
};

function Frooty() {
  return (
    <>
      <Head>
        <title>Frooty</title>
      </Head>
      <div>
        <Navbar />
        <Hero content={data.hero} />
        <About content={data.about} />
        <Services content={data.services} />
        <Products content={data.products} />
        <Partners content={data.partners} />
        <Contact content={data.contact} />
        <Footer content={data.footer} />
      </div>
    </>
  );
}

export default Frooty;
