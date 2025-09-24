"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  return (
    <>
      <MobileNavbar />

      <nav className="fixed sm:block hidden left-1/2 -translate-x-1/2 top-4 w-[38rem] z-50 px-6 py-3 bg-gray-900/50 rounded-xl outline-2 outline-accent/70 backdrop-blur-lg animate-[slide-down_300ms_ease-out] shadow-[inset_0_2px_5px_rgba(177,177,177,0.25)] whitespace-nowrap">
        <div className="flex items-center justify-center">
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
              <Image
                src="/icons/github-white.svg"
                alt="Github"
                width={22}
                height={22}
              />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/aarush-maddula-6b3172301/"
              className="py-1 px-1 rounded-md hover:bg-gray-600 hover:scale-[105%] relative transition-all duration-150 ease-out"
            >
              <Image
                src="/icons/In-white.png"
                alt="Linkedin"
                width={22}
                height={22}
              />
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:maddula.aarush@gmail.com"
              className="py-1 px-1 rounded-md hover:bg-gray-600 hover:scale-[105%] relative transition-all duration-150 ease-out"
            >
              <Image
                src="/icons/email.svg"
                alt="Email"
                width={22}
                height={22}
                className="invert"
              />
            </Link>
          </div>
        </div> 
      </nav>
    </>
  );
}

function MobileNavbar() {
  const [isOpen, setNavbarState] = useState<boolean>(false);

  return (
    <>
      <button className="sm:hidden fixed top-4 left-4 z-50" onClick={() => setNavbarState(!isOpen)}>
        <img src="/icons/menu.svg" alt="menu" className="invert size-6" />
      </button>

      {isOpen && (
        <>
          <div className="sm:hidden fixed left-4 top-12 p-4 flex flex-col gap-4 bg-gray-900/50 outline-2 outline-accent/70 backdrop-blur-lg rounded-xl z-50 animate-[slide-in_300ms_ease-out]">
            {/* <div className="absolute w-full h-full bg-dark/100 -z-10"></div> */}

            <div className="text-white font-bold text-lg">Aarush Maddula</div>

            <div className="text-white flex flex-col gap-2 font-semibold">
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

            <div className="flex gap-2">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/AarushMaddula"
                className="py-1 px-1 rounded-md hover:bg-gray-600 hover:scale-[105%] transition-all duration-150 ease-out"
              >
                <Image
                  src="/icons/github-white.svg"
                  alt="Github"
                  width={22}
                  height={22}
                />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/aarush-maddula-6b3172301/"
                className="py-1 px-1 rounded-md hover:bg-gray-600 hover:scale-[105%] relative transition-all duration-150 ease-out"
              >
                <Image
                  src="/icons/In-white.png"
                  alt="Linkedin"
                  width={22}
                  height={22}
                />
              </Link>

              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:maddula.aarush@gmail.com"
                className="py-1 px-1 rounded-md hover:bg-gray-600 hover:scale-[105%] relative transition-all duration-150 ease-out"
              >
                <Image
                  src="/icons/email.svg"
                  alt="Email"
                  width={22}
                  height={22}
                  className="invert"
                />
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
