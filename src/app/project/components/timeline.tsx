import Image from "next/image";

export default function Timeline({ pageData }: any) {
  return (
    <div className="flex gap-4">
      <div className="bg-white w-2 mx-8"></div>
      <ol>
        {pageData.timeline.map((section) => {
          return (
            <li key={section.heading}>
              <section className="flex gap-2">
                <div className="flex-col">
                  {section.images.map((path) => {
                    return (
                      <div
                        key={path}
                        className="relative h-12 aspect-5/3 object-cover"
                      >
                        <Image
                          src={`/data/projects/3d-printed-brick/${path}`}
                          alt=""
                          fill
                        />
                      </div>
                    );
                  })}
                </div>

                <div>
                  <h2>{section.heading}</h2>
                  <p>{section.description}</p>
                </div>
              </section>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
