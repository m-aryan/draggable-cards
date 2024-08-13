import React from "react";

function Background() {
  return (
    <>
      <div className="fixed w-full h-screen z-[2]">
        <div className="w-full top-[5%] py-10 flex text-xl justify-center text-zinc-600 font-semibold">
          Draggable Cards.
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-900">
          Cards
        </h1>
      </div>
    </>
  );
}

export default Background;
