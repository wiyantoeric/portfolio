import Arrow from "./arrow";

function Products({ content }) {
  return (
    <div id="products" className="p-16 flex flex-col gap-y-8
    ">
      <p><b>PRODUCTS</b></p>
      <p className="text-6xl whitespace-pre-line">{content.title}</p>
      <p className="text-2xl font-medium mb-20">{content.description}</p>
      <div className="w-full grid grid-cols-3 gap-16">
        {content.productList.map((product) => (
          <div className="m-auto flex flex-col gap-y-12">
            <div className="gap-y-2">
              <img className="w-64 h-64 rounded-3xl object-cover" src={product.image} />
              <div className="px-2 flex flex-col gap-y-2">
                <div className="text-3xl pt-2">{product.name}</div>
                <div className="text-2xl">IDR {product.price}</div>
              </div>
            </div>
            <button className="w-2/3 flex flex-row justify-around items-center border-black border-[1px] rounded-3xl hover:bg-gray-100 mb-8">
              <p className="text-xl pb-1 ">see product</p>
              <Arrow />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
