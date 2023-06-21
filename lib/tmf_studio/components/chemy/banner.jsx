function Banner({ content }) {
  return (
    <div className="px-12 py-24 w-full flex flex-row space-x-12">
      <img className="mx-auto object-fill w-full" src={content.image} />
    </div>
  );
}

export default Banner;
