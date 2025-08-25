import { useState } from "react";
import ResourceView from "./ResourceView";

export default function ResourceCarousel({ resources }: { resources: any[] }) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % resources.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + resources.length) % resources.length);
  };

  return (
    <>
      <div className="relative rounded-xl h-60 aspect-4/3 overflow-hidden">
        <ResourceView resource={resources[current]} />
        <button
          onClick={prev}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-light/70 rounded-full p-2 cursor-pointer hover:bg-light/90 hover:transition-color hover:duration-150"
        >
          <img src="/icons/down-arrow.svg" alt="previous" className="invert transform rotate-90 size-6"/>
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-light/70 rounded-full p-2 cursor-pointer hover:bg-light/90 hover:transition-color hover:duration-150"
        >
          <img src="/icons/down-arrow.svg" alt="next" className="invert transform -rotate-90 size-6"/>
        </button>
      </div>
      
      <p className="text-center text-sm text-muted italic mt-4">{resources[current].caption}</p>
    </>
  );
}
