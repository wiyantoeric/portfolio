import React, { useState, useEffect } from "react";

// Parameter: imageUrl, alt
export default function AsyncImage({ imageUrl, alt }) {
  const [image, setImage] = useState(null);

  const fetchImage = async () => {
    const res = await fetch(imageUrl);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImage(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
  }, [image]);

  return (
    <div className="w-full h-full">
      {!image && <div className="w-full h-full bg-sky-300 animate-pulse"></div>}
      {image && <img className="w-full h-full object-cover" src={image} alt={alt} />}
    </div>
  );
}
