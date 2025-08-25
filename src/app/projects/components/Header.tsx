export default function Header({ title, description, creators, date }: { title: string, description: string, creators: string[], date: string}) {
  return (
    <div className="pt-6 pb-6">
      <div className="relative">
        <div className="absolute w-full h-full bg-accent/10 blur-3xl rounded-2xl -z-10"></div>

        <h1 className='text-4xl font-bold mb-4 text-highlight'>{title}</h1>
        
        <div className="flex items-center justify-between mb-4 text-md text-neutral">
          <h2 className="">
            By: {creators?.join(', ')}
          </h2>
          <h2 className="">{date}</h2>
        </div>
        
        <p className="text-md text-muted">
          {description}
        </p>
      </div>
    </div>
  );
}