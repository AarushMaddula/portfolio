type EducationCardProps = {
  title: string;
  description: string;
  date: string;
  location: string;
  image_url: string;
};

export default function EducationCard({
  title,
  date,
  description,
  location,
  image_url
}: EducationCardProps) {
  return (
    <div className="flex flex-col md:flex-row bg-normal rounded-xl overflow-hidden">
      <div className="md:w-1/3 h-60 md:h-auto">
        <img src={image_url} alt="" className="h-full w-full object-cover "/>
      </div>

      <div className="flex-1 py-8 px-6 flex flex-col">
        <h3 className="text-2xl text-neutral font-semibold mb-2">{title}</h3>
        <div className="flex gap-4 text-md text-muted mb-4">
          <div className="flex items-center gap-1.5">
            <img src="/icons/calendar.svg" alt="" className="invert h-4" />
            <p>{date}</p>
          </div>
          <div className="flex items-center gap-1.5">
            <img src="/icons/pin.svg" alt="" className="invert h-4" />
            <p>{location}</p>
          </div>
        </div>
        <p className="text-md text-muted mb-2">{description}</p>
      </div>
    </div>
  );
}
