import { useState } from "react";
import Image from "next/image";

export default function ImageCarousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative rounded-xl h-60 aspect-4/3 overflow-hidden">
      <div className="absolute inset-0 aspect-4/3 overflow-hidden blur-3xl scale-100">
        <Image
          src={images[current]}
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      <Image
        src={images[current]}
        alt={`Slide ${current}`}
        fill
        className="object-contain"
        priority
      />
      <button
        onClick={prev}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-light/70 rounded-full p-2 cursor-pointer hover:bg-light/90 hover:transition-color hover:duration-150"
      >
        <img src="/down-arrow.svg" alt="" className="invert transform rotate-90 size-6"/>
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-light/70 rounded-full p-2 cursor-pointer hover:bg-light/90 hover:transition-color hover:duration-150"
      >
        <img src="/down-arrow.svg" alt="" className="invert transform -rotate-90 size-6"/>
      </button>
    </div>
  );
}
