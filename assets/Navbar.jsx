import React from "react";
import Image from "next/image";
import github from "./github.svg";
import docs from "./docs.svg";

export default function Navbar() {
  return (
    <header className="bg-[url('/nav-bg.webp')] select-none">
      <div className="container mx-auto flex flex-wrap lg:p-2 pt-6 pb-2 flex-col md:flex-row items-center">
        <a className="flex max-h-5 max-w-5 title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image
            src={"/ferrisgram-text.png"}
            width={405}
            height={72}
            alt="Ferrisgram"
          />
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-3 pt-4">
          <a
            href="https://docs.rs/ferrisgram"
            target={"_blank"}
            rel="noreferrer"
          >
            <Image src={docs.src} width={44} height={44} alt="Docs" />
          </a>

          <a
            href="https://github.com/ferrisgram/ferrisgram"
            target={"_blank"}
            rel="noreferrer"
          >
            <Image src={github.src} width={44} height={44} alt="GitHub" />
          </a>
        </nav>
      </div>
    </header>
  );
}