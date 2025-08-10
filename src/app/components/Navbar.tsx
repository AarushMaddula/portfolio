function Navbar() {
  return (
    <nav className="w-full mt-4 fixed">
      <div
        className="mx-auto px-6 py-3 w-fit bg-gray-900/90 flex items-center 
      justify-center rounded-xl outline-2 outline-blue-900/90 backdrop-blur-sm"
      >
        <div className="text-white mr-12">Aarush Maddula</div>

        <div className="text-white flex gap-3 items-center">
          <a
            href="#home"
            className="py-1 px-2 hover:bg-gray-600 rounded-md transition-all duration-100"
          >
            Home
          </a>
          <a
            href=""
            className="py-1 px-2 hover:bg-gray-600 rounded-md transition-all duration-100"
          >
            About Me
          </a>
          <a
            href=""
            className="py-1 px-2 hover:bg-gray-600 rounded-md transition-all duration-100"
          >
            Projects
          </a>
        </div>

        <span className="w-px h-6 mx-4 bg-white"></span>

        <div className="flex items-center gap-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/AarushMaddula"
            className="py-1 px-1 rounded-md hover:bg-gray-600 transition-all duration-100"
          >
            <img src="/github-white.svg" className="size-[22px]" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/aarush-maddula-6b3172301/"
            className="py-1 px-1 rounded-md hover:bg-gray-600 transition-all duration-100"
          >
            <img src="/In-white.png" className="size-[22px]" />
          </a>
          {/* <a href="mailto:himaddula07@gmail.com">
            <img src="/email.svg" className="size-[22px] invert"/>
          </a> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
