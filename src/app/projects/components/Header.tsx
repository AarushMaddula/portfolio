import Link from "next/link";

export default function Header({ title, description, creators, date }: { title: string, description: string, creators: string[], date: string}) {
  return (
    <div className="relative pt-6 pb-6 flex gap-4">
      <Link href="/#projects" className="flex justify-center items-center self-start rounded-full p-1 hover:scale-[105%] hover:bg-light/50 transition-all duration-150 ease-out mt-1">
        <img src="/icons/down-arrow.svg" alt="" className="invert size-7 rotate-90"/>
      </Link>

      <div className="flex-none absolute w-full h-full bg-accent/10 blur-3xl rounded-2xl -z-10"></div>
      <div className="flex-1">

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