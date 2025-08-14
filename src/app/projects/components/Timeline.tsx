"use client";

import Image from "next/image";
import ImageCarousel from "./ImageCarousel";

function renderImages(section : any) {
  switch (section.images.length) {
    case 1:
      return (
        <div className="flex flex-col justify-center align-middle">
          <div
            className="relative rounded-xl h-60 aspect-4/3 overflow-hidden"
          >
            <Image
              src={section.images[0]}
              alt=""
              fill
            />
          </div>
        </div>
      );
    case 0:
      return;
    default:
      return (
        <div className="flex flex-col justify-center align-middle">
          <ImageCarousel images={section.images} />
        </div>
      );
  }
}

export default function Timeline({ pageData }: any) {
  return (
    <>
      <div>The Process</div>
      <div className="flex gap-4">
        <div className="bg-white w-4 mx-8"></div>
        <ol className="flex flex-col gap-8">
          {pageData.timeline.map((section : any) => {
            return (
              <li key={section.heading} className="relative">
                <div className="absolute bg-white w-12 h-0.5 top-4 -translate-x-full"></div>
                <section className="rounded-2xl border border-white p-8 flex flex-row gap-8 z-10 bg-gray-900">
                  {renderImages(section)}

                  <div>
                    <h2 className="text-2xl font-medium text-gray-200 mb-4">{section.heading}</h2>
                    <p className="text-gray-500 text-sm">{section.description}</p>
                  </div>
                </section>
                
              </li>
            );
          })}
        </ol>
      </div>
    </>
    
    
  );
}
