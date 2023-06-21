function Hero({ content }) {
  return (
    <div>
      <p className="text-8xl px-20 py-24">{content.title}</p>
      <img className="w-full object-cover" src={content.image} />
    </div>
  );
}

export default Hero;
