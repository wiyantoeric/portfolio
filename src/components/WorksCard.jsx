function WorksCard() {
    return (
      <div
        className="flex  w-96 flex-col border-2 border-black p-8"
      >
        <div className="flex flex-col justify-start gap-10">
          <p>My works</p>
          {/* works boxes */}
          <div className="">
            <p className="font-semibold">Flutter</p>
            <div className="flex flex-col gap-4">
              <article>
                <p className="">Audio Store</p>
                <a
                  className="underline"
                  href="https://github.com/wiyantoeric/audio_store"
                  target="_blank"
                >
                  github.com/wiyantoeric/audio_store
                </a>
              </article>
            </div>
          </div>
          <div className="">
            <p className="font-semibold">Website</p>
            <div className="flex flex-col gap-4">
              <article>
                <p>Audio Store</p>
                <a
                  className="underline"
                  href="https://github.com/wiyantoeric/audio_store"
                  target="_blank"
                >
                  github.com/wiyantoeric/audio_store
                </a>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
}

export default WorksCard;