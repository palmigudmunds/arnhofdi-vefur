import React from "react";
import logo from "../../resources/logo/arnhofdi-white.png";

const Footer = () => {
  return (
    <footer className="p-4 bg-maindarkblue md:p-8 lg:p-10 mt-12">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="/"
          className="flex justify-center items-center text-2xl font-semibold"
        >
          <img className="h-24" src={logo} alt="Logo" />
        </a>
        <p className="mb-3 text-white text-xl">Arnhöfði ehf.</p>
        <ul className="flex flex-col justify-center items-center space-y-1 list-none list-inside text-white font-light text-sm">
          <li>
            <a
              href="https://goo.gl/maps/neM2qegvaRXAcGQx9"
              className="text-sm hover:text-maingold"
            >
              Suðurlandsbraut 30, Reykjavík
            </a>
          </li>
          <li>
            <a
              href="mailto:arnhofdiehf@gmail.com"
              className="text-sm hover:text-maingold"
            >
              arnhofdiehf@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:+3546907718" className="text-sm hover:text-maingold">
              +354 690 7718
            </a>
          </li>
        </ul>
        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm font-light text-white sm:text-center">
            © 2023 Allur réttur áskilinn.
          </span>
          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/Arnhofdi"
              class="text-white hover:text-maingold"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
