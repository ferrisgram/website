import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer class="text-white body-font bg-[#8D1D18] py-2">
        <div class="containetr px-5 mx-auto flex items-center sm:flex-row flex-col">
          <div class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 select-none px-2">
            <Image src={"/ferrisgram-stroke.png"} width={40} height={40} />
          </div>
          <p class="text-sm sm:mt-0">
            ©{" "}
            {new Date().getFullYear() === 2022
              ? 2022
              : `2022 - ${new Date().getFullYear()}`}{" "}
            Ferrisgram Developers — All rights reserved.
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start font-light text-xs text-center lg:text-right">
            Ferrisgram is licensed under The MIT License.
            <br />
            Ferrisgram Logos are licensed under Creative Commons Zero v1.0
            Universal.
          </span>
        </div>
      </footer>
    </>
  );
}
