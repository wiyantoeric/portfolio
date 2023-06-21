import Menu from "../../components/mofo/menu";
import Hero from "../../components/mofo/hero";
import ImageCollection from "../../components/mofo/imageCollection";
import MofoFooter from "../../components/mofo/footer";
import Container from "../../components/mofo/container";
import Navbar from "../../components/mofo/navbar";

const data = {
  images: [
    {
      title: "Cookie",
      url: "/data/mofo/cookie.png",
    },
    {
      title: "Voodoo Burger",
      url: "/data/mofo/voodoo-burger.png",
    },
    {
      title: "Summer",
      url: "/data/mofo/summer.png",
    },
    {
      title: "Bean Bag",
      url: "/data/mofo/bean-bag.png",
    },
    {
      title: "Sake",
      url: "/data/mofo/sake.png",
    },
    {
      title: "Ramen",
      url: "/data/mofo/ramen.png",
    },
    {
      title: "Dunut",
      url: "/data/mofo/dunut.png",
    },
  ],
};

function MofoBranding() {
  return (
    <Container pageName="themofostudio--branding">
      <Navbar page="branding" />
      <div className="px-20 py-28 flex flex-col gap-y-20">
        <Hero title="branding">
          <div className="flex flex-col gap-y-12">
            <div className="flex flex-row gap-x-28 items-center">
              <p className="font-bold text-8xl">OUR LATEST</p>
              <div className="flex flex-grow justify-center py-28 rounded-full w-fit bg-[#ff6bf9]">
                <p className="text-white text-6xl">2021</p>
              </div>
            </div>
            <div className="flex flex-row gap-x-28 items-center">
              <div className="flex flex-grow justify-center py-28 rounded-full w-fit bg-[#ea4e1b]">
                <p className="text-white text-6xl">2022</p>
              </div>
              <p className="font-bold text-8xl">BRANDING</p>
            </div>
            <div className="flex flex-row gap-x-28 items-center">
              <p className="font-bold text-8xl">PROJECT COLLECTION</p>
              <div className="flex flex-grow justify-center py-28 rounded-full w-fit bg-[#5eb9da]">
                <svg width="34" height="39" viewBox="0 0 34 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.44 0.309999H19.06V30.23L33.25 16.04V22.475L16.75 38.975L0.249998 22.475V16.04L14.44 30.23L14.44 0.309999Z" fill="black" />
                </svg>
              </div>
            </div>
          </div>
        </Hero>
        <ImageCollection images={data.images} />
        <MofoFooter />
      </div>
    </Container>
  );
}

export default MofoBranding;
