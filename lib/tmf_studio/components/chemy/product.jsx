function Product({ content }) {
  return (
    <div className="py-16 flex flex-col">
      <p className="px-12 py-16 text-5xl font-bold">{content.title}</p>

      <img className="w-screen object-fill" src={content.banner.backgroundImage} alt={content.banner.title} />

      <div className="px-12 py-16 sm:py-24 grid grid-cols-2 sm:grid-cols-3 grid-flow-row gap-12 sm:gap-20">
        {content.productList.map((product) => {
          return (
            <figure className="m-auto flex flex-col sm:gap-y-8" >
              <img src={product.image} />
              <figcaption className="text-center font-bold text-xl" >{product.name}</figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
