import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full p-4 md:p-8">
      <nav className=" flex items-center justify-between">
        <h1 className=" dark:text-white text-gray-800 font-bold text-3xl">
          Shortify
        </h1>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9 md:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div
          className={`md:hidden absolute right-5 top-16 dark:bg-gray-500/30 dark:hover:text-pink-600 ease-in-out dark:border-none bg-white z-10 border border-gray-200 rounded-lg shadow-lg p-4 transition duration-500 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <ul className="flex flex-col gap-6 text-gray-700 text-xl font-bold">
            <li>
              <a
                className="dark:text-white dark:hover:text-pink-600 ease-in-out duration-300 hover:text-pink-600"
                href="#"
              >
                Features
              </a>
            </li>
            <li>
              <a
                className="dark:text-white dark:hover:text-pink-600 ease-in-out duration-300 hover:text-pink-600"
                href="#"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                className="dark:text-white dark:hover:text-pink-600 ease-in-out duration-300 hover:text-pink-600"
                href="#"
              >
                Resources
              </a>
            </li>
          </ul>
        </div>
        <ul className="hidden md:flex gap-6 text-gray-700 text-xl font-bold">
          <li>
            <a
              className="dark:text-white dark:hover:text-pink-600 ease-in-out duration-300 hover:text-pink-600"
              href="#"
            >
              Features
            </a>
          </li>
          <li>
            <a
              className="dark:text-white dark:hover:text-pink-600 ease-in-out duration-300 hover:text-pink-600"
              href="#"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              className="dark:text-white dark:hover:text-pink-600 ease-in-out duration-300 hover:text-pink-600"
              href="#"
            >
              Resources
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
