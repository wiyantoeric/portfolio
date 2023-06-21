import { server } from "../../models/webProfile";
import Link from "next/link";

import Navbar from "../../components/mofo/navbar";
import Hero from "../../components/mofo/hero";
import Button from "../../components/mofo/button";
import MofoFooter from "../../components/mofo/footer";
import Credit from "../../components/mofo/credit";
import Container from "../../components/mofo/container";

function MofoAbout() {
  return (
    <Container pageName="themofostudio">
      <div className="flex flex-col">
        <Navbar page="about" />
        <div className="px-20 py-8 flex flex-col gap-y-24">
          <Hero title="about">
            <div className="flex flex-row pb-20">
              <div className="basis-1/2">
                <p className="w-5/6 text-4xl font-bold">We aim to deliver inspiration through branding and creative website.</p>
              </div>
              <div className="basis-1/2 px-28 text-2xl">We believe every people have a past that needs to be improved by moving forward. We help people turn their inspiration to reality. That’s how MOFO was born.</div>
            </div>
            <img className="w-1/2" src={`${server.hostname}/data/mofo/artboard-1.png`} />
          </Hero>
          <Hero title="our services">
            <div className="flex flex-row">
              <div className="basis-1/2">
                <p className="uppercase whitespace-pre-line text-4xl font-bold">{"designing, branding,\ndeveloping website"}</p>
              </div>
              <div className="basis-1/2 flex justify-center">
                <div className="w-4/5 flex flex-col gap-y-12">
                  <p className="whitespace-pre-line text-2xl">
                    {
                      "Getting tired of developing your business?\nLet us know! we are here to help you!\nWe can make you a website to track your business in one, and we also do a branding, where you can express your feeling through your business. Everythings gonna be easy once you let us to assist you!"
                    }
                  </p>
                  <a href="/contact">
                    <Button text="book now" />
                  </a>
                </div>
              </div>
            </div>
          </Hero>
        </div>
        <div className="px-20 py-8 flex flex-col gap-y-24">
          <img className="w-full" src={`${server.hostname}/data/mofo/artboard-2.png`} />
          <Hero title="website">
            <div className="flex flex-row">
              <div className="basis-1/2">
                <p className="uppercase whitespace-pre-line text-4xl font-bold">{"developing website\nso you are all set"}</p>
              </div>
              <div className="basis-1/2 flex justify-center">
                <div className="w-4/5 flex flex-col gap-y-12">
                  <p className="whitespace-pre-line text-2xl">We made 5 templates of website. You can choose which one you like and let us know. We will use the chosen template and change certain colors, images to your brand feels!</p>
                  <div className="cursor-pointer">
                    <a href="contact">
                      <Button text="book now" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Hero>
          <div className="w-full bg-[#dae693] p-20">
            <div className="px-20 relative">
              <div className="uppercase w-fit text-2xl px-8 py-6 absolute left-0 -translate-y-1/2 rounded-full bg-[#EA4E1B] text-white font-bold cursor-pointer">
                <Link href="/website">see more websites</Link>
              </div>
              <img className="w-full object-cover" src={`${server.hostname}/data/mofo/frooty-screenshot.png`} alt="Frooty Website Template" />
              <div className="uppercase w-fit text-2xl px-8 py-6 absolute -translate-y-1/2 right-0 rounded-full bg-[#EA4E1B] text-white font-bold cursor-pointer">
                <Link href="/website">see more websites</Link>
              </div>
            </div>
          </div>
          <Hero title="website">
            <div className="flex flex-row">
              <div className="basis-1/2">
                <p className="uppercase whitespace-pre-line text-4xl font-bold">{"branding is not just\na logo"}</p>
              </div>
              <div className="basis-1/2 flex justify-center">
                <div className="w-4/5 flex flex-col gap-y-12">
                  <p className="whitespace-pre-line text-2xl">
                    Many people think that a logo is a brand. To be honest, no it’s not a business yet. In order to make a business, you will need a strong branding that will explain your goals and problem solutions.
                  </p>
                  <a href="/contact">
                    <Button text="book now" />
                  </a>
                </div>
              </div>
            </div>
          </Hero>
          <div className="relative">
            <img className="w-full" src={`${server.hostname}/data/mofo/artboard-3.png`} />
            <div className="uppercase w-fit text-2xl px-8 py-6 absolute -translate-y-1/2 right-0 -translate-x-20 rounded-full bg-[#EA4E1B] text-white font-bold cursor-pointer">
              <Link href="/website">see more websites</Link>
            </div>
          </div>
          <MofoFooter />
          <Credit />
        </div>
      </div>
    </Container>
  );
}

export default MofoAbout;
