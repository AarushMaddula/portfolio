"use client";

import ImageCarousel from "./ImageCarousel";
import TextFormatter from "./TextFormatter";
import ResourceView from "./ResourceView";

function renderResources(resources) {
  if (!resources) return;

  switch (resources.length) {
    case 1:
      return (
        <>
          <ResourceView resource={resources[0]} />
          <p className="text-center text-sm text-muted italic mt-4">{resources[0].caption}</p>
        </>
      );
    case 0:
      return;
    default:
      return (
        <ImageCarousel resources={resources} />
      );
  }
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
                  {
                    section.resources && (
                      <div className="flex flex-col">
                        {renderResources(section.resources)}
                      </div>
                    )
                  }
                </section>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
