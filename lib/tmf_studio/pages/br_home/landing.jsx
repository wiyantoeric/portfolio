import Image from "next/image";
import { Component } from "react";
import Navbar from "./components/navbar";
import Link from "next/link";
import Footer from "./components/footer";

class Landing extends Component {
  gridData = [
    {
      caption: "Aware",
      alt: "Aware Mockup",
      imgUrl: `/tmf-studio/index/aware-mockup.jpg`,
    },
    {
      caption: "Blocked By U",
      alt: "Blocked By U Mockup",
      imgUrl: `/tmf-studio/index/blckd-mockup.jpg`,
    },
    {
      caption: "Joses Harvey",
      alt: "Joses Harvey Mockup",
      imgUrl: `/tmf-studio/index/joses-mockup.jpg`,
    },
    {
      caption: "Nad's Bouquet",
      alt: "Nad's Bouquet Mockup",
      imgUrl: `/tmf-studio/index/nads-mockup.jpg`,
    },
    {
      caption: "Konut",
      alt: "Konut Mockup",
      imgUrl: `/tmf-studio/index/konut-mockup.jpg`,
    },
    {
      caption: "Amira",
      alt: "Amira Mockup",
      imgUrl: `/tmf-studio/index/amira-mockup.jpg`,
    },
    {
      caption: "Blue Theory",
      alt: "Blue Theory Mockup",
      imgUrl: `/tmf-studio/index/blue-theory-mockup.jpg`,
    },
    {
      caption: "Human Kynd",
      alt: "Human Kynd Mockup",
      imgUrl: `/tmf-studio/index/human-kynd-mockup.jpg`,
    },
    {
      caption: "Matchamu",
      alt: "Matchamu Mockup",
      imgUrl: `/tmf-studio/index/matchamu-mockup.jpg`,
    },
  ];
  render() {
    return (
      <>
        <Navbar page="about" />
        <div className="py-4"></div>
        <div className="relative w-screen h-max">
          <div className="w-full h-max mx-auto">
            <div className="relative left-[1.8%] w-[95%] mx-auto z-10">
              <object type="image/svg+xml" data={`/tmf-studio/index/rgb-font.svg`} />
            </div>
            <div className="px-24 font-century_gothic_bold">
              <p className="w-[200px] absolute top-[6.5%] left-[67%] text-[10px] z-10">
                I do website design!
                <br /> And happy to let you know that I have my website developer team.
              </p>
              <p className="w-[200px] absolute top-[11%] left-[35%] text-[10px] z-10">Run by a 20 year old gal who specializing in Graphic Design.</p>
              <p className="w-[200px] absolute top-[25.5%] left-[46%] text-[10px] z-10">
                Love creating a brand!
                <br /> Logos, stickers, packaging, etc!
              </p>
              <p className="w-[200px] absolute top-[64%] left-[7%] text-[10px] z-10">
                You might wondering what is RGB related to my brand? Actually, if you wanna know, I’m so in love with my color brand that feels like really lights up in RGB color mode.
              </p>
              <p className="absolute top-[93%] left-[46%] z-10 font-gazpacho_bold">about me!</p>
            </div>
          </div>
        </div>
        <div className="relative h-[470px]">
          <div className="absolute -translate-y-60 bg-[#FBF45C] w-full py-16 flex flex-row justify-between">
            <div className="pl-[7%] flex flex-col gap-y-20 justify-center">
              <p className="text-4xl font-gilroy_bold text-[#F522ED] w-1/2">I aim to deliver inspiration through branding and creative website. </p>
              <div className="relative w-max whitespace-pre-line h-8">
                <p className="relative z-10">{"I believe every people have a past that\n need to be improved by moving forward.\n I help people turn their inspiration to\n reality. That’s how my studio was born."}</p>
                <svg className="absolute -translate-y-1/3 right-0 top-0 translate-x-1/3 scale-[80%]" width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_8_457)">
                    <path
                      d="M111.993 53.5001C111.993 58.9116 99.5279 62.2774 97.9473 67.1568C96.3047 72.2089 104.359 82.2579 101.302 86.4668C98.2441 90.6758 86.1586 86.1351 81.9138 89.2313C77.6691 92.3275 78.3523 105.203 73.3069 106.848C68.4341 108.431 61.3939 97.6561 55.9965 97.6561C50.5991 97.6561 43.5728 108.431 38.6861 106.848C33.6407 105.203 34.2826 92.293 30.0792 89.2313C25.8759 86.1696 13.7834 90.7172 10.6913 86.4668C7.59918 82.2164 15.6884 72.2089 14.0457 67.1568C12.4651 62.2774 0 58.9116 0 53.5001C0 48.0886 12.4651 44.7297 14.0457 39.8504C15.6884 34.7983 7.63369 24.7493 10.6913 20.5404C13.7489 16.3314 25.8344 20.8652 30.0792 17.7759C34.324 14.6865 33.6407 1.80397 38.6861 0.159091C43.559 -1.42359 50.5991 9.35105 55.9965 9.35105C61.3939 9.35105 68.4203 -1.42359 73.3069 0.159091C78.3523 1.80397 77.7105 14.7142 81.9138 17.7759C86.1172 20.8376 98.2096 16.2899 101.302 20.5404C104.394 24.7908 96.3047 34.7983 97.9473 39.8504C99.5279 44.7297 111.993 48.0955 111.993 53.5001Z"
                      fill="#6DCF81"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_457">
                      <rect width="112" height="107" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <Image width={540} height={664} src={`/tmf-studio/index/poster-1.jpg`} />
          </div>
        </div>
        <img className="w-full object-cover" src={`/tmf-studio/index/artboard-2.jpg`} />
        <div className="bg-[#FBF45C] px-28 pt-12 pb-32 flex flex-row justify-between">
          <div className="flex flex-col basis-1/2 gap-y-40 self-center">
            <p className="text-4xl font-gilroy_bold text-[#F522ED] whitespace-pre-line">{"What services do\n I offer to you?"}</p>
            <div className="flex flex-col gap-y-8">
              <p className="text-xl font-gilroy_medium w-3/5">Proudly titled myself by building a design studio of branding and website who will help you deliver your pinterest board into reality!</p>
              <div className="flex gap-x-6">
                <div className="px-8 py-4 rounded-full bg-[#F522ED] cursor-pointer" onClick={() => {}}>
                  <object className="cursor-pointer" type="image/svg+xml" data={`/tmf-studio/index/branding-button-font.svg`} />
                </div>
                <div className="px-8 py-4 rounded-full bg-[#6DCF81] cursor-pointer" onClick={() => {}}>
                  <object className="cursor-pointer" type="image/svg+xml" data={`/tmf-studio/index/website-button-font.svg`} />
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/2 flex flex-col font-gazpacho gap-y-24">
            <p className="z-20">need a logo? branding? website?</p>
            <div className="flex flex-row gap-x-12 w-fit relative self-center">
              <img className="object-cover w-[220px] h-auto z-10 drop-shadow-mockup" src={`/tmf-studio/index/broonie-mockup.png`} />
              <img className="object-cover w-[220px] h-auto z-10 drop-shadow-mockup" src={`/tmf-studio/index/art-cafe-mockup.png`} />
              <svg className="absolute -bottom-16 left-1/2 -translate-x-1/2" width="194" height="185" viewBox="0 0 194 185" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M194 92.494C194 101.85 172.407 107.669 169.669 116.105C166.824 124.839 180.777 142.212 175.48 149.489C170.183 156.766 149.248 148.916 141.895 154.269C134.542 159.622 135.726 181.882 126.986 184.726C118.545 187.462 106.35 168.834 97 168.834C87.6503 168.834 75.479 187.462 67.0141 184.726C58.2741 181.882 59.386 159.562 52.1047 154.269C44.8235 148.975 23.8764 156.837 18.52 149.489C13.1637 142.141 27.1762 124.839 24.3307 116.105C21.5927 107.669 0 101.85 0 92.494C0 83.1382 21.5927 77.3312 24.3307 68.8955C27.1762 60.161 13.2235 42.7877 18.52 35.511C23.8166 28.2342 44.7517 36.0725 52.1047 30.7315C59.4577 25.3905 58.2741 3.11819 67.0141 0.274414C75.4551 -2.46183 87.6503 16.1661 97 16.1661C106.35 16.1661 118.521 -2.46183 126.986 0.274414C135.726 3.11819 134.614 25.4382 141.895 30.7315C149.177 36.0247 170.124 28.1625 175.48 35.511C180.836 42.8594 166.824 60.161 169.669 68.8955C172.407 77.3312 194 83.1502 194 92.494Z"
                  fill="#6DCF81"
                />
              </svg>
              <svg className="absolute -left-1/2 translate-x-1/2 -top-20" width="292" height="280" viewBox="0 0 292 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M291.982 139.499C291.982 153.61 259.484 162.386 255.363 175.109C251.08 188.282 272.08 214.484 264.108 225.459C256.136 236.434 224.628 224.594 213.561 232.668C202.494 240.741 204.276 274.314 191.122 278.603C178.417 282.73 160.063 254.635 145.991 254.635C131.919 254.635 113.601 282.73 100.86 278.603C87.7061 274.314 89.3796 240.651 78.4208 232.668C67.4621 224.684 35.9354 236.542 27.8738 225.459C19.8121 214.376 40.9019 188.282 36.6192 175.109C32.4984 162.386 0 153.61 0 139.499C0 125.389 32.4984 116.631 36.6192 103.908C40.9019 90.7347 19.9021 64.5323 27.8738 53.5576C35.8454 42.5828 67.3541 54.4046 78.4208 46.3492C89.4876 38.2939 87.7061 4.70285 100.86 0.41387C113.565 -3.71292 131.919 24.3817 145.991 24.3817C160.063 24.3817 178.381 -3.71292 191.122 0.41387C204.276 4.70285 202.602 38.3659 213.561 46.3492C224.52 54.3325 256.047 42.4747 264.108 53.5576C272.17 64.6404 251.08 90.7347 255.363 103.908C259.484 116.631 291.982 125.407 291.982 139.499Z"
                  fill="#F522ED"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden">
          <div className="flex text-[40px] font-gilroy_medium">
            <span className="text-6xl mx-5">✶</span>
            <p>branding • logo • posters • packaging • illustrations • invitation card • website</p>
          </div>
        </div>
        <div className="relative bg-[#FCFAF5]">
          <div className="grid grid-cols-3 px-28 pt-28 pb-20 gap-20 justify-items-center">
            {this.gridData.map((mockup) => (
              <div key={mockup.imgUrl} className="w-full aspect-square z-10">
                <div className="relative w-full aspect-square">
                  <Image alt={mockup.alt} layout="fill" objectFit="cover" src={mockup.imgUrl} />
                </div>
                <p className="py-3 text-xl font-gazpacho_italic">{mockup.caption}</p>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 h-1/2 w-full bg-[#FBF45C]"></div>
        </div>
        <div className="p-12 flex flex-col items-center">
          <div className="relative w-fit">
            <object className="translate-y-4 translate-x-[105%]" type="image/svg+xml" data={`/tmf-studio/index/star-yellow.svg`} />
            <div className="-translate-y-[150%]">
              <object className="translate-y-0 z-10" type="image/svg+xml" data={`/tmf-studio/index/instagram-visit.svg`} />
              <object className="translate-x-[150%] z-10" type="image/svg+xml" data={`/tmf-studio/index/portfolio.svg`} />
            </div>
          </div>
          <div className="w-fit px-8 py-4 rounded-full bg-[#6DCF81] cursor-pointer" onClick={() => {}}>
            <object className="cursor-pointer" type="image/svg+xml" data={`/tmf-studio/index/instagram-button-font.svg`} />
          </div>
        </div>
        <div className="bg-[#F522ED] px-28 pt-12 pb-32 flex flex-row justify-between">
          <div className="flex flex-col basis-1/2 gap-y-40 self-center">
            <p className="text-4xl font-gilroy_bold text-[#FBF45C] whitespace-pre-line">{"Want an affordable website for personal or business?"}</p>
            <div className="flex flex-col gap-y-8">
              <p className="text-xl font-gilroy_medium w-3/5 text-[#FCFAF5]">
                I’ve got you covered! I would like to offer you a package of website. Attractive, designed and developed website templates that will help you get your business off from the ground. All done, all you have to do is just tell
                ‘em your website name and your customer will visit you! Very practical isn’t it?
              </p>
            </div>
          </div>
          <div className="basis-1/2 flex flex-col font-gazpacho gap-y-24">
            <p className="text-[#FCFAF5] z-20">what’s interesting about making website with me?</p>
            <div className="flex flex-row gap-x-12 w-fit relative self-center">
              <Image alt={"Frooty Mockup"} width={308} height={595} objectFit="cover" src={`/tmf-studio/index/frooty-mockup.jpg`} />
              <object className="absolute -bottom-12 -left-1/2" type="image/svg+xml" data={`/tmf-studio/index/star-yellow.svg`} />
            </div>
          </div>
        </div>
        <div className="relative flex flex-col gap-y-20 items-center w-full px-24 py-12">
          <p className="font-gazpacho_italic">click the ipad to see websites!</p>
          <div className="relative w-[1188px] h-[920px]">
            <Link href="/template/broonie"><Image className="cursor-pointer" alt={"Broonie website template"} layout="fill" objectFit="cover" src={`/tmf-studio/index/broonie-ipad.png`} /></Link>
          </div>
          <div className="relative w-[1188px] h-[920px]">
          <Link href="/template/chemy"><Image className="cursor-pointer" alt={"Chemy website template"} layout="fill" objectFit="cover" src={`/tmf-studio/index/chemy-ipad.png`} /></Link>
          </div>
          <div className="relative w-[1188px] h-[920px]">
          <Link href="/template/frooty"><Image className="cursor-pointer" alt={"Frooty website template"} layout="fill" objectFit="cover" src={`/tmf-studio/index/frooty-ipad.png`} /></Link>
          </div>
          <div className="absolute top-1/4 w-full h-[25%] bg-[#F522ED] -z-10"></div>
          <div className="absolute bottom-0 w-full h-[25%] bg-[#FBF45C] -z-10"></div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Landing;
