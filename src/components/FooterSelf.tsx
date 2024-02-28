import React from "react";
import heart from "../../public/heart.svg";
import Image from "next/image";

const FooterSelf = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p className="flex flex-row justify-center my-2 text-xs">
        Hecho con&nbsp;
        <span className="mx-2">
          <Image
            src={heart}
            alt="Heart"
            width={15}
            height={15}
            className="heart-icon"
          />
        </span>
        <a
          href="https://www.fakumax.dev"
          rel="noreferrer"
          className="mx-2  text-blue-500"
        >
          Facundo Vergara
        </a>
        ©{year}
      </p>
    </footer>
  );
};

export { FooterSelf };
