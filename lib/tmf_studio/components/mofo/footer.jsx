import InstagramIcon from "./instagram";
import BehanceIcon from "./behance";
import LinkedInIcon from "./linkedin";
import Button from "./button";

// model : 1 button item, 2 button ungu
function MofoFooter({ model }) {
  // return model ? model === 1 ? <MofoFooter1 /> : <MofoFooter2 /> : <MofoFooter1 />;
  return <MofoFooter2/>;
}

export default MofoFooter;

function MofoFooter1() {
  return (
    <div className="pt-20 flex flex-row">
      <div className="basis-1/2 flex flex-col gap-y-8">
        <p className="text-4xl font-bold">You Good? Let’s talk.</p>
        <p className="text-2xl">If you're interested in working together, please tell us a little bit about your project scope/deliverables, timeline, and budget as well!</p>
        <p className="text-2xl">We specialize in branding for personal, start up and companies. See you!</p>
        <div className="flex flex-row py-12 gap-x-8 items-center">
          <div className="aspect-square cursor-pointer hover:bg-orange-500 transition-colors duration-100 rounded-md p-2 items-center flex flex-row">
            <a target="_blank" href="https://instagram.com/themofostudio">
              <InstagramIcon />
            </a>
          </div>
          <div className="aspect-square cursor-pointer hover:bg-orange-500 transition-colors duration-100 rounded-md p-2 items-center flex flex-row">
            <a target="_blank" href="https://behance.net/themofostudio">
              <BehanceIcon />
            </a>
          </div>
          <div className="aspect-square cursor-pointer hover:bg-orange-500 transition-colors duration-100 rounded-md p-2 items-center flex flex-row">
            <a target="_blank" href="https://linkedin.com/link/themofostudio">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className="basis-1/2 flex flex-col px-28 gap-y-8">
        <div className="flex flex-col">
          <label for="name" className="mb-2 text-2xl font-bold text-gray-900">
            Your Amazing Name
          </label>
          <input type="name" id="name" class="bg-white border-2 border-black text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-6" required />
        </div>
        <div className="flex flex-col">
          <label for="email" className="mb-2 text-2xl font-bold text-gray-900">
            Your Lovely Email
          </label>
          <input type="email" id="email" class="bg-white border-2 border-black text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-6" required />
        </div>
        <div className="flex flex-col">
          <label for="subject" className="mb-2 text-2xl font-bold text-gray-900">
            Exciting Subject About Your Brand
          </label>
          <input type="subject" id="subject" class="bg-white border-2 border-black text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-6" required />
        </div>
        <div className="flex flex-col">
          <label for="social_media" className="mb-2 text-2xl font-bold text-gray-900">
            Any Social Media to Contact
          </label>
          <input type="social_media" id="social_media" class="bg-white border-2 border-black text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-6" required />
        </div>
        <a href="mailto:themofostudio@gmail.com">
          <div className="pt-10">
            <button className="bg-gray-900 text-gray-100 w-fit px-12 py-3 rounded-full font-bold text-2xl hover:bg-gray-700 focus:ring-4 focus:ring-gray-500 transition-all">Send</button>
          </div>
        </a>
      </div>
    </div>
  );
}

function MofoFooter2() {
  return (
    <div className="pt-20 flex flex-row">
      <div className="basis-1/2 flex flex-col gap-y-8">
        <p className="text-4xl font-bold">You Good? Let’s talk.</p>
        <p className="text-2xl">If you're interested in working together, please tell us a little bit about your project scope/deliverables, timeline, and budget as well!</p>
        <p className="text-2xl">We specialize in branding for personal, start up and companies. See you!</p>
        <div className="flex flex-row py-12 gap-x-8 items-center">
          <div className="aspect-square cursor-pointer hover:bg-orange-500 transition-colors duration-100 rounded-md p-2 items-center flex flex-row">
            <a target="_blank" href="https://instagram.com/themofostudio">
              <InstagramIcon />
            </a>
          </div>
          <div className="aspect-square cursor-pointer hover:bg-orange-500 transition-colors duration-100 rounded-md p-2 items-center flex flex-row">
            <a target="_blank" href="https://behance.net/themofostudio">
              <BehanceIcon />
            </a>
          </div>
          <div className="aspect-square cursor-pointer hover:bg-orange-500 transition-colors duration-100 rounded-md p-2 items-center flex flex-row">
            <a target="_blank" href="https://linkedin.com/link/themofostudio">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className="basis-1/2 flex flex-col px-28 gap-y-8">
        <div className="flex flex-col">
          <label for="name" className="mb-2 text-2xl uppercase">
            Your Amazing Name
          </label>
          <input type="name" id="name" class="bg-white border-2 border-black text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-6" required />
        </div>
        <div className="flex flex-col">
          <label for="email" className="mb-2 text-2xl uppercase">
            Your Lovely Email
          </label>
          <input type="email" id="email" class="bg-white border-2 border-black text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-6" required />
        </div>
        <div className="flex flex-col">
          <label for="subject" className="mb-2 text-2xl uppercase">
            Exciting Subject About Your Brand
          </label>
          <input type="subject" id="subject" class="bg-white border-2 border-black text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-6" required />
        </div>
        <div className="flex flex-col">
          <label for="social_media" className="mb-2 text-2xl uppercase">
            Any Social Media to Contact
          </label>
          <input type="social_media" id="social_media" class="bg-white border-2 border-black text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-6" required />
        </div>
        <a href="mailto:themofostudio@gmail.com">
          <Button text="send" />
        </a>
      </div>
    </div>
  );
}
