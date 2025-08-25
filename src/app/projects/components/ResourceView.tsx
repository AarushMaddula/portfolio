"use client";

import Image from "next/image";
import { useState } from "react";

export default function ResourceView({ resource }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <div className="relative flex flex-col justify-center align-middle overflow-clip rounded-xl">
        {resource.type === "image" && (
          <div className="absolute inset-0 aspect-4/3 overflow-hidden blur-3xl scale-100">
            <Image src={resource.path} alt="" fill className="object-cover" />
          </div>
        )}

        <div className="relative rounded-xl h-60 aspect-4/3 overflow-hidden">
          {resource.type === "image" && (
            <Image src={resource.path} alt="" fill className="object-contain cursor-pointer" onClick={() => setIsOpen(true)}/>
          )}

          {resource.type === "video" && (
            <iframe
              src={`https://drive.google.com/file/d/${resource.id}/preview`}
              className="absolute w-full h-full border-none"
              allowFullScreen
            ></iframe>
          )}

        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-dark/80 flex items-center justify-center z-50 cursor-pointer" 
          onClick={() => setIsOpen(false)}
        >
          <img 
            src={resource.path}  
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />
        </div>
      )}
    </>
  );
}
