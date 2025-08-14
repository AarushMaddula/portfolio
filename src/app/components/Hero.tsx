import Link from "next/link";

function Hero() {
  return (
    <section id="home" className="w-full h-screen">
      <div className="w-full h-full mask-circle mask-radial-farthest-side mask-radial-at-center mask-radial-from-60% mask-radial-to-100% dots"></div>
      <div className="left-1/3 top-1/3 absolute -translate-x-1/2 -translate-y-1/2 inset-0 bd blur-3xl rounded-full"></div>
      <div className="left-2/3 top-2/3 absolute -translate-x-1/2 -translate-y-1/2 inset-0 bd blur-3xl rounded-full"></div>

      <div className="left-1/2 top-1/2 absolute -translate-x-1/2 -translate-y-1/2 animate-[pop_300ms_ease-out] flex flex-col">
        <h2 className="text-2xl font-bold mb-2 text-center text-white">
          Salutations
          <span className="inline-block animate-[wave_1000ms_ease-in-out_infinite_alternate] origin-bottom-right">
            👋
          </span>
          , I&apos;m
        </h2>
        <h1 className="text-5xl font-bold mb-2 text-center bg-gradient-to-l from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Aarush Maddula
        </h1>
        <h2 className="text-2xl font-bold text-center text-white mb-10">
          Aspiring Computer Engineer
        </h2>
        <div className="flex gap-4 justify-center items-center">
          <Link
            href="/#projects"
            className="px-4 py-2 font-medium border border-white rounded-md text-white duration-150 hover:scale-[105%] hover:bg-gray-500 hover:cursor-pointer"
          >
            Projects
          </Link>
          <Link
            href="/downloads/resume.pdf"
            className="px-4 py-2 font-medium border border-white rounded-md text-white duration-150 hover:scale-[105%] hover:bg-gray-500 hover:cursor-pointer"
            download={true}
          >
            Resume
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <p className="text-lg font-medium text-center text-gray-200">
          Scroll down <span className="inline-block animate-bounce">👇</span>
        </p>
      </div>
    </section>
  );
}

export default Hero;
