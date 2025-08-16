export default function ResourceSection({ resources }) {
  return (
    <div className="my-6">
      <h2 className="text-3xl font-semibold mb-4">Resources</h2>

      <div className="flex flex-wrap gap-4">
        {resources.map((resource) => {
          return (
            <div
              key={resource.path}
              className="inline-block py-4 px-6 bg-normal rounded-xl"
            >
              <a
                href={resource.path}
                className="flex items-center gap-2"
                download
              >
                <img src={resource.icon} alt="" className="invert size-6" />
                {resource.name}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
