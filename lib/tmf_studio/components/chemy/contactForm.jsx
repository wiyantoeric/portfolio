function ContactForm({ content }) {
  return (
    <div className="px-24 lg:px-48 py-36 flex flex-col gap-y-12">
      <p className="text-4xl font-bold text-center">Let's discuss something cool together!</p>
      <form className="flex flex-col lg:flex-row justify-center lg:space-x-8">
        <div className="w-full flex flex-row gap-x-6">
          <div className="relative z-0 mb-6 w-full group h-full">
            <input type="email" name="email" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label
              for="email"
              className="absolute text-xl lg:text-3xl text-gray-400 font-bold duration-300 transform scale-75 top-1/2 -translate-y-3/4 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:opacity-0 peer-valid:opacity-0 peer-visited:opacity-0 peer-invalid:opacity-100"
            >
              Your Email Here
            </label>
          </div>
        </div>
        <button type="button" className="text-lg font-bold text-black bg-white rounded-full border-2 border-black focus:outline-none focus:ring-4 focus:ring-gray-300 px-8 py-2 text-center m-auto hover:bg-gray-200">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
