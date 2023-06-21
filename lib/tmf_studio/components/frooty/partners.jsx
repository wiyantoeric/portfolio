function Partners({ content }) {
    return(
  <div id="partnership" className="p-16 flex flex-col gap-y-12 lg:gap-y-0 items-center lg:flex-row lg:space-x-12 justify-center bg-[#C0FA91]">
    <div className="flex flex-wrap items-center sm:flex sm:flex-row lg:flex-nowrap lg:space-x-52 my-auto justify-center">
      {content.map((partners) => (
        <figure key={partners.name}>
          <div className="w-16 h-16 m-auto mx-12 sm:mx-8">
            <img className="object-scale-down m-auto h-full" src={partners.logo} alt={content.name} />
          </div>
          <figcaption className="text-center font-bold text-xl">{partners.name}</figcaption>
        </figure>
      ))}
    </div>
  </div>
  )
}

export default Partners;