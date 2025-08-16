"use client";

import Image from "next/image";
import ImageCarousel from "./ImageCarousel";

function renderImages(section) {
  switch (section.images.length) {
    case 1:
      return (
        <div className="relative flex flex-col justify-center align-middle overflow-clip rounded-xl">
          <div
            className="absolute inset-0 aspect-4/3 overflow-hidden blur-3xl scale-100"
          >
            <Image 
              src={section.images[0]} 
              alt="" 
              fill
              className="object-cover"
            />
          </div>

          <div
            className="relative rounded-xl h-60 aspect-4/3 overflow-hidden"
          >
            <Image
              src={section.images[0]}
              alt=""
              fill
              className="object-contain"
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

export default function Timeline({ timeline }) {
  return (
    <div className="my-6">
      
      <div className="text-3xl font-semibold mb-4">The Process</div>
      <div className="flex px-8">
        <div className="bg-linear-[180deg,var(--color-dark)_0%,var(--color-accent)_10%,var(--color-accent)_90%,var(--color-dark)] min-w-1"></div>
        <ol className="flex flex-col gap-8">
          {timeline.map((section) => {
            return (
              <li key={section.heading} className="relative">
                <section className="p-8 flex flex-col md:flex-row gap-8">
                  <div className="relative">
                    <div className="absolute w-full h-full bg-accent/10 blur-3xl rounded-2xl -z-10"></div>
                    <h2 className="relative text-2xl font-medium text-gray-200 mb-4 dot">{section.heading}</h2>
                    <p className="text-gray-500 text-sm">{section.description}</p>
                  </div>
                    {renderImages(section)}

                </section>
                
              </li>
            );
          })}
        </ol>
      </div>
    </div>
    
    
  );
}
