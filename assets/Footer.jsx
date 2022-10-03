import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="text-white body-font bg-[#8D1D18] py-2">
        <div className="containetr px-5 mx-auto flex items-center sm:flex-row flex-col">
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 select-none px-2">
            <Image
              src={"/ferrisgram-stroke.png"}
              width={40}
              height={40}
              alt="Ferrisgram"
            />
          </div>
          <p className="text-sm sm:mt-0">
            ©{" "}
            {new Date().getFullYear() === 2022
              ? 2022
              : `2022 - ${new Date().getFullYear()}`}{" "}
            Ferrisgram Developers — All rights reserved.
          </p>
          <div className="sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start font-normal text-xs text-center lg:text-right">
            <span>
              Ferrisgram is licensed under{" "}
              <a
                href="https://github.com/ferrisgram/ferrisgram/blob/dev-working/LICENSE"
                className="text-gray-200 hover:text-blue-300 hover:underline transition-colors duration-200"
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                The MIT License.
              </a>
            </span>
            <br />
            <span>
              Ferrisgram Logos are licensed under{" "}
              <a
                href="https://creativecommons.org/publicdomain/zero/1.0/"
                className="text-gray-200 hover:text-blue-300 hover:underline transition-colors duration-200"
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                Creative Commons Zero v1.0 Universal.
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
