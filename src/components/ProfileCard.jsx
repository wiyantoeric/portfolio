import Link from "next/link";
import GithubIcon from "./icon/GithubIcon";
import LinkedinIcon from "./icon/LinkedinIcon";
import WorksLink from "./button/WorksLink";

function ProfileCard() {
  return (
    <div className="relative flex aspect-[7/8] w-96 flex-col border-2 border-black bg-white p-8">
      {/* <Link href={"/works"} className="">
        <WorksLink />
      </Link> */}
      <div className="flex flex-col justify-start">
        <p className="text-2xl">Eric Wiyanto</p>
        <p className="text-sm italic">application developer</p>
        <p className="my-4 whitespace-pre-line">
          {
            "Hey there!\n I'm currently on my Informatics degree. I do web and mobile programming with NextJs and Flutter"
          }
        </p>
      </div>

      <div className="mt-auto flex w-full gap-4">
        <a
          href="https://github.com/wiyantoeric"
          target="_blank"
          className="group relative"
        >
          <div className="absolute left-0 top-0 h-full w-full cursor-pointer border-2 border-black border-opacity-0 transition-transform duration-100 ease-in-out group-hover:scale-125 group-hover:border-opacity-100"></div>
          <div className="bg-[#2D333B] p-2">
            <GithubIcon />
          </div>
        </a>
        <a
          href="https://linkedin.com/in/ericwiyanto"
          target="_blank"
          className="group relative"
        >
          <div className="absolute left-0 top-0 h-full w-full cursor-pointer border-2 border-black border-opacity-0 transition-transform ease-in-out group-hover:scale-125 group-hover:border-opacity-100"></div>
          <div className="bg-[#0A66C2] p-2">
            <LinkedinIcon />
          </div>
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
