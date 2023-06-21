function Hero({ title, children }) {
  return (
    <div className="flex flex-col gap-y-4">
      <p className="uppercase text-2xl">{title}</p>
      {children}
    </div>
  );
}

export default Hero;
