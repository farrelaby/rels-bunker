import React from "react";
import { Carousel } from "@mantine/carousel";
import Link from "next/link";

export function Projects({}) {
  return (
    <>
      <h2 className="text-5xl  mt-24 mb-16 ml-16 text-white">Past Projects</h2>
      <div className="flex flex-col gap-4 items-center justify-center mb-24">
        <div className="w-[500px]">
          <Carousel
            height={550}
            align="center"
            className=" text-[#0070f3] bg-white shadow-xl"
          >
            <Carousel.Slide className="bg-[hsl(225,15%,18%)]">
              <img src="/dashboard.jpg" className="w-full"></img>
              <div className="flex flex-col mx-12 mt-4">
                <h3 className="text-3xl">
                  Photovoltaic & Wind Trubine <br /> Dashboard
                </h3>
                <p className="mt-4 text-white text-base">
                  Dashboard made with React.js to monitor Photovoltaic and Wind
                  Turbine Generator
                </p>
                <div className="flex flex-row gap-6">
                  <Link href={"https://www.google.com"} passHref>
                    <button className="bg-[#0070f3] hover:bg-blue-700 text-white font-bold py-2 mt-8 rounded w-24 shadow-xl">
                      See More
                    </button>
                  </Link>
                  <button className="bg-[#0070f3] hover:bg-blue-700 text-white font-bold py-2 mt-8 rounded w-24 shadow-xl">
                    See More
                  </button>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide className="bg-[hsl(225,25%,18%)]">2</Carousel.Slide>
            <Carousel.Slide className="bg-[hsl(225,30%,18%)]">3</Carousel.Slide>
          </Carousel>
        </div>
      </div>
    </>
  );
}
