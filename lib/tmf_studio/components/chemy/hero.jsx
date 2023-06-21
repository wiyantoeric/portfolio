import React, { Component } from "react";

function Hero({ content }) {
  return (
    <div className="flex flex-grow w-full">
      <div className="bg-cover bg-center bg-no-repeat h-full w-full" style={{ backgroundImage: "url(/data/chemy/image-main.png)" }}>
        <div className="flex flex-row justify-between h-full w-full p-16">
          <div className="flex flex-col text-white justify-center gap-y-12">
            <div className="text-center">
              <p className="text-2xl sm:text-5xl font-bold">{content.topLeft[0]}</p>
              <p className="text-lg sm:text-3xl font-bold">{content.topLeft[1]}</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-5xl font-bold">{content.bottomLeft[0]}</p>
              <p className="text-lg sm:text-3xl font-bold">{content.bottomLeft[1]}</p>
            </div>
          </div>
          <div className="flex flex-col text-white justify-center gap-y-12">
            <div className="text-center">
              <p className="text-2xl sm:text-5xl font-bold">{content.topRight[0]}</p>
              <p className="text-lg sm:text-3xl font-bold">{content.topRight[1]}</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-5xl font-bold">{content.bottomRight[0]}</p>
              <p className="text-lg sm:text-3xl font-bold">{content.bottomRight[1]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
