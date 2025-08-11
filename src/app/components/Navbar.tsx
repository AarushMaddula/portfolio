import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full mt-4 fixed">
      <div
        className="mx-auto px-6 py-3 w-fit bg-gray-900/90 flex items-center 
      justify-center rounded-xl outline-2 outline-blue-900/90 backdrop-blur-sm"
      >
        <div className="text-white mr-12 font-bold text-lg">Aarush Maddula</div>

        <div className="text-white flex gap-3 items-center font-semibold">
          <Link
            href="#home"
            className="py-1 px-2 hover:bg-gray-600 rounded-md transition-all duration-100"
          >
            Home
          </Link>
          <Link
            href="#about-me"
            className="py-1 px-2 hover:bg-gray-600 rounded-md transition-all duration-100"
          >
            About Me
          </Link>
          <Link
            href="#projects"
            className="py-1 px-2 hover:bg-gray-600 rounded-md transition-all duration-100"
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
            className="py-1 px-1 rounded-md hover:bg-gray-600 transition-all duration-100"
          >
            <Image src="/github-white.svg" alt="Github" width={22} height={22}/>
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/aarush-maddula-6b3172301/"
            className="py-1 px-1 rounded-md hover:bg-gray-600 transition-all duration-100"
          >
            <Image src="/In-white.png" alt="Linkedin" width={22} height={22}/>
          </Link>
        </div>
      </div>
    </nav>
  );
}