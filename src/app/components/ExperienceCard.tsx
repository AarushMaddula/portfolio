type ExperienceCardProps = {
  title: string;
  description: string;
  date: string;
  location: string;
  hours: string;
};

export default function ExperienceCard({
  title,
  date,
  description,
  location,
  hours
}: ExperienceCardProps) {
  return (
    <div className="flex items-start gap-4 bg-normal p-4 rounded-xl">
      <div className="flex-1/6 md:flex-1/12 flex justify-center items-center p-3 relative aspect-square bg-radial from-light rounded-full">
        <img src={"/work.svg"} alt="" className="invert" />
      </div>

      <div className="flex-5/6 text-white">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted mb-2">{description}</p>
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <img src="/calendar.svg" alt="" className="invert h-4" />
            <p className="text-sm text-muted">{date}</p>
          </div>
          <div className="flex items-center gap-1">
            <img src="/pin.svg" alt="" className="invert h-4" />
            <p className="text-sm text-muted">{location}</p>
          </div>
          <div className="flex items-center gap-1">
            <img src="/clock.svg" alt="" className="invert h-4" />
            <p className="text-sm text-muted">{hours}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
