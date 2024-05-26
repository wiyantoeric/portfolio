function AudioStore() {
  return (
    <div className="h-screen w-screen bg-zinc-900">
      <a href="https://github.com/wiyantoeric/audio_store" target="_blank">
        <button className=" delay-50 absolute right-0 m-8 rounded-full border-2 border-black bg-black px-4 py-2 text-white transition-colors hover:bg-[#2D333B]">
          github
        </button>
      </a>
      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        Thank you for verifying your email!
      </p>
    </div>
  );
}

export default AudioStore;
