import React from "react";
export function Header({}) {
  return (
    <div className={"min-h-screen flex flex-col items-center justify-center"}>
      <video
        autoPlay
        playsInline
        loop
        muted
        className={"absolute w-full h-full object-cover"}
      >
        <source src="/bg-2.mp4" type="video/mp4; codec=H264" />
      </video>
      <div className="z-10 text-center text-white">
        <h1 className="text-6xl ">Welcome! </h1>
        <div className="flex flex-row gap-8">
          <span className="text-2xl  mt-8 ">Selamat Datang!</span>
          <span className="text-2xl  mt-8">ようこそ!</span>
        </div>
      </div>
    </div>
  );
}
