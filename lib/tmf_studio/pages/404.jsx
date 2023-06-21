import React, { Component } from "react";

export default function ErrorPage() {
  return (
    <div className="w-screen h-screen">
      <div className="h-full w-full text-center text-2xl absolute top-1/2 -translate-y-1/2 right-1/2 -translate-x-1/2">It seems that you've mistyped the url</div>
    </div>
  );
}
