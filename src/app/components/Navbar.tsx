import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full mt-4 fixed z-50 animate-[slide-down_300ms_ease-out]">
      <div
        className="mx-auto px-6 py-3 w-fit bg-gray-900/50 flex items-center 
      justify-center rounded-xl outline-2 outline-accent backdrop-blur-lg
      shadow-[inset_0_2px_5px_rgba(177,177,177,0.25)]"
      >
        <div className="text-white font-bold text-lg">Aarush Maddula</div>

        <span className="w-px h-6 mx-4 bg-white"></span>

        <div className="text-white flex gap-3 items-center font-semibold">
          <Link
            href="/#home"
            className="py-1 px-2 hover:bg-gray-600 rounded-md hover:scale-[105%] transition-all duration-150 ease-out"
          >
            Home
          </Link>
          <Link
            href="/#about-me"
            className="py-1 px-2 hover:bg-gray-600 rounded-md hover:scale-[105%] transition-all duration-150 ease-out"
          >
            About Me
          </Link>
          <Link
            href="/#projects"
            className="py-1 px-2 hover:bg-gray-600 rounded-md hover:scale-[105%] transition-all duration-150 ease-out"
          >
            Projects
          </Link>
        </div>

        <span className="w-px h-6 mx-4 bg-white"></span>

        <div className="flex items-center gap-2">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/AarushMaddula"
            className="py-1 px-1 rounded-md hover:bg-gray-600 hover:scale-[105%] transition-all duration-150 ease-out"
          >
            <Image src="/github-white.svg" alt="Github" width={22} height={22}/>
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/aarush-maddula-6b3172301/"
            className="py-1 px-1 rounded-md hover:bg-gray-600 hover:scale-[105%] relative transition-all duration-150 ease-out"
          >
            <Image src="/In-white.png" alt="Linkedin" width={22} height={22}/>
          </Link>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            href=""
            className="py-1 px-1 rounded-md hover:bg-gray-600 hover:scale-[105%] relative transition-all duration-150 ease-out"
          >
            <Image src="/email.svg" alt="Email" width={22} height={22} className="invert"/>
          </Link>
        </div>
      </div>
    </nav>
  );
}