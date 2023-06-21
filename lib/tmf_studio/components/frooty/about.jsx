function About({ content }) {
  return (
    <div id="about" className="px-16 py-24 flex flex-col gap-y-8">
      <p><b>ABOUT US</b></p>
      <p className="text-6xl w-3/4">{content.title}</p>
      <p className="text-2xl font-medium">{content.paragraph1}</p>
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-col justify-center px-8 py-7 rounded-3xl bg-[#C0FA91]">
          <p className="text-7xl text-center">30+</p>
          <p className="text-3xl">Fresh Fruits</p>
        </div>
        <div className="flex flex-col justify-center px-8 py-7 rounded-3xl bg-[#9BE8F9]">
          <p className="text-7xl text-center">10</p>
          <p className="text-3xl">Partnerships</p>
        </div>
        <div className="flex flex-col justify-center px-8 py-7 rounded-3xl bg-[#8DF3DA]">
          <p className="text-7xl text-center">3000+</p>
          <p className="text-3xl text-center">Healthy Customers</p>
        </div>
        <div className="flex flex-col justify-center px-8 py-7 rounded-3xl bg-[#CCD2FC]">
          <p className="text-7xl text-center">12</p>
          <p className="text-3xl">Years Established</p>
        </div>
      </div>
      <p className="text-2xl font-medium">{content.paragraph2}</p>
      <p className="text-2xl font-medium">{content.paragraph3}</p>
    </div>
  );
}

export default About;
