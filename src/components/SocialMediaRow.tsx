import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const SocialMediaRow = () => {
  return (
    <>
      <div className="flex flex-row items-center gap-2">
        <Link className="text-[#964b00]" href={""}>
          <SiGmail size={"1.2rem"} />
        </Link>
        <Link className="text-[#0077b5]" href={""}>
          <FaLinkedinIn size={"1.2rem"} />
        </Link>
        <Link className="text-[#1DA1F2]" href={""}>
          <BsTwitterX size={"1.2rem"} />
        </Link>        
        <Link className="text-[#075E54]" href={""}>
          <FaWhatsapp size={"1.2rem"} />
        </Link>
      </div>
    </>
  );
};

export default SocialMediaRow;
