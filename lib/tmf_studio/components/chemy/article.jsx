function Article({ content }) {
  return (
    <div className="w-full flex flex-col gap-y-12 lg:flex-row px-16 py-20 lg:space-x-16 justify-center">
      <img className="w-11/12 mx-auto object-cover" src={content.image} />
      <div className="flex flex-col justify-end space-y-12 lg:space-y-16">
        <h1 className="text-5xl font-bold">{content.title}</h1>
        <p className="text-xl lg:text-2xl font-bold whitespace-pre-line">{content.description}</p>
      </div>
    </div>
  );
}

export default Article;
