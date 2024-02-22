import GithubIcon from "./icon/GithubIcon";
import LinkedinIcon from "./icon/LinkedinIcon";

function ProfileCard() {
  return (
    <div className="flex aspect-[7/8] w-96 flex-col border-2 border-black p-8">
      <div className="flex flex-col justify-start ">
        <p className="text-2xl">Eric Wiyanto</p>
        <p className="my-2 text-sm italic">Application development</p>
        <p className="my-4 whitespace-pre-line">
          {
            "Hey there!\n I'm currently on my Informatics degree. I do web and mobile programming with NextJs and Flutter"
          }
        </p>
      </div>
      <div className="mt-auto flex w-full gap-2">
        <a href="https://github.com/wiyantoeric" target="_blank">
          <button className="border-2 border-black border-opacity-0 p-1 transition-all delay-75 hover:border-opacity-100">
            <div className="bg-[#2D333B] p-2">
              <GithubIcon />
            </div>
          </button>
        </a>
        <a href="https://linkedin.com/in/ericwiyanto" target="_blank">
          <button className="border-2 border-black border-opacity-0 p-1 transition-all delay-75 hover:border-opacity-100">
            <div className="bg-[#0A66C2] p-2">
              <LinkedinIcon />
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
