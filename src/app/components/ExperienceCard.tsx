type ExperienceCardProps = {
  title: string;
  role: string;
  description: string;
  date?: string;
  location?: string;
  hours?: string;
  image_url: string;
};

function Metric({ metric, icon_url }) {
  return (
    metric && (
    <div className="flex items-center gap-1.25">
      <img src={icon_url} alt="" className="invert h-4" />
      <p className="">{metric}</p>
    </div>
    )
  );
}

export default function ExperienceCard({
  title,
  role,
  description,
  date,
  location,
  hours,
  image_url,
}: ExperienceCardProps) {
  return (
    <div className="flex flex-row bg-normal rounded-xl pop appear">
      <div className="relative h-18 ml-6 mt-7 aspect-square rounded-xl overflow-hidden">
        <img src={image_url} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 py-6 px-6 flex flex-col">
        <h3 className="text-2xl text-neutral font-semibold mb-2">{title}</h3>
        <h4 className="text-lg text-muted font-semibold mb-2">{role}</h4>
        <div className="flex text-md text-muted font-medium mb-4 flex-wrap gap-x-4">
          <Metric metric={date} icon_url="/icons/calendar.svg" />
          <Metric metric={location} icon_url="/icons/pin.svg" />
          <Metric metric={hours} icon_url="/icons/clock.svg" />
        </div>
        <p className="text-sm text-muted mb-2">{description}</p>
        
      </div>
    </div>
  );
}
