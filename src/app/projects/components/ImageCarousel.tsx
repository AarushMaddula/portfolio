import { useState } from "react";
import Image from "next/image";

export default function ImageCarousel({ images } : {images: string[]}) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative rounded-xl h-60 aspect-4/3 overflow-hidden">
      <Image
        src={images[current]}
        alt={`Slide ${current}`}
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <button
        onClick={prev}
        style={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.7)",
          borderRadius: "50%",
          border: "none",
          padding: "8px 12px",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        &#8592;
      </button>
      <button
        onClick={next}
        style={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.7)",
          borderRadius: "50%",
          border: "none",
          padding: "8px 12px",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        &#8594;
      </button>
    </div>
  );
}