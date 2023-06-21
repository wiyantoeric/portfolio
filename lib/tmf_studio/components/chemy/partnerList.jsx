function PartnerList({ partners }) {
  return (
    <div className="p-16 flex flex-col gap-y-12 lg:gap-y-0 items-center lg:flex-row lg:space-x-12 justify-center">
      <p className="text-3xl sm:text-5xl font-bold text-center">Our Partnership:</p>

      <div className="flex flex-wrap items-center sm:flex sm:flex-row lg:flex-nowrap lg:space-x-4 my-auto justify-center">
        {partners.map((partner) => (
          <figure  key={partner.name}>
            <div className="w-16 h-16 m-auto mx-4 sm:mx-8">
              <img className="object-scale-down m-auto h-full" src={partner.logo} alt={partners.name} />
            </div>
            <figcaption className="text-center font-bold text-xl">{partner.name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default PartnerList;
