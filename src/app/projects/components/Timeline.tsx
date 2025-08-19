"use client";

import Image from "next/image";
import ImageCarousel from "./ImageCarousel";
import TextFormatter from "./TextFormatter";

function renderImages(images) {
  if (!images) return;

  switch (images.length) {
    case 1:
      return (
        <div className="relative flex flex-col justify-center align-middle overflow-clip rounded-xl">
          <div className="absolute inset-0 aspect-4/3 overflow-hidden blur-3xl scale-100">
            <Image
              src={images[0]}
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="relative rounded-xl h-60 aspect-4/3 overflow-hidden">
            <Image
              src={images[0]}
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
        <div className="flex flex-col align-middle">
          <ImageCarousel images={images} />
        </div>
      );
  }
}

function renderVideos(video) {
  if (!video) return;

  return (
    <div className="h-60 aspect-4/3 flex justify-center items-center rounded-xl bg-normal">
      <video className="max-h-full" controls muted preload="metadata">
        <source src={video[0]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default function Timeline({ timeline }) {
  return (
    <div className="py-6">
      <div className="text-3xl text-highlight font-semibold mb-4">The Process</div>
      <div className="flex px-8">
        <div className="flex flex-col min-w-1">
          <div className="bg-linear-to-b from-[var(--color-dark)] to-[var(--color-accent)] h-8 "></div>
          <div className="bg-accent flex-1"></div>
          <div className="bg-linear-to-b from-[var(--color-accent)] to-[var(--color-dark)] h-8 "></div>
        </div>
        <ol className="flex flex-col gap-16 my-8">
          {timeline.map((section) => {
            return (
              <li key={section.heading} className="relative">
                <section className="pl-8 flex flex-col justify-between md:flex-row gap-8">
                  <div className="relative">
                    <div className="absolute w-full h-full bg-accent/10 blur-3xl rounded-2xl -z-10"></div>
                    <h2 className="relative text-2xl font-medium text-neutral mb-4 dot">
                      {section.heading}
                    </h2>
                    <p className="text-muted text-sm">
                      <TextFormatter text={section.description} />
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    {renderImages(section.images)}
                    {renderVideos(section.videos)}
                  </div>
                </section>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
