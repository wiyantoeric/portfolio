import Arrow from "./arrow";

function Contact({ content }) {
  return (
    <div id="contact" className="w-full px-12 py-24 flex flex-col gap-y-4">
      <p><b>CONTACT US</b></p>
      <p className="text-6xl whitespace-pre-line">{content.title}</p>
      <p className="text-2xl font-medium">{content.description}</p>
      <form>
        <div class="relative z-0 mb-6 w-full group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-1/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer focus:placeholder:opacity-0 placeholder:text-[14px]"
            placeholder="Your Subject Here"
            required
          />
          <div className="group">
            {/* <div
              contentEditable
              placeholder="Your Message Here"
              className="py-2.5 border-b-2 border-black focus:outline-none group before:content-[attr(placeholder)] before:text-gray-400 focus:before:content-[''] focus:border-blue-600 before:text-[14px] "
            >
              Your Message Here
            </div> */}
            <textarea id="comment" rows="5" class="pt-4 w-full text-sm border-0 focus:outline-none border-b-2 border-black focus:border-blue-600 focus:ring-0 resize-none" placeholder="Your Message Here" required></textarea>
          </div>
        </div>
      </form>
      <button className="w-fit py-1 px-4 gap-x-8 flex flex-row justify-around items-center border-black border-[1px] rounded-3xl hover:bg-gray-100">
        <p className="text-xl pb-1">send to us</p>
        <Arrow />
      </button>
    </div>
  );
}

export default Contact;
