// import Image from "next/image";

function ImageCollection({ images }) {
  return (
    <div className="flex flex-col gap-y-16 w-full">
      {/* <Image width={500} height={500} layout="intrinsic" src="/data/chemy/image.png" /> */}
      {images.map((image) => (
        <img className="w-full h-fit object-cover rounded-[45px]" src={image.url} alt={image.title} />
      ))}
    </div>
  );
}

export default ImageCollection;
