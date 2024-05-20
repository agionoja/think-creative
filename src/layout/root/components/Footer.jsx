import logoWhite from "@/assets/logo-white.svg";
import facebookIcon from "@/assets/facebook.svg";
import instagramIcon from "@/assets/instagram.svg";
import linkedInIcon from "@/assets/linkedIn.svg";

import ContactForm from "@/layout/root/components/ContactForm.jsx";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className={
        "bg-light-black rounded-t-4xl flex flex-col gap-8 px-4 py-9 lg:px-[120px]"
      }
    >
      <div className="flex flex-col items-center justify-center gap-12">
        <img src={logoWhite} alt="" className={"basis-0"} />
        <ContactForm />
      </div>
      <div className={"h-[1px] w-full bg-white"} />
      <div
        className={
          "flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-0"
        }
      >
        <div className={"flex gap-4"}>
          <Link to={"/"}>
            {" "}
            <img src={facebookIcon} alt="" />
          </Link>
          <Link to={"/"}>
            {" "}
            <img src={instagramIcon} alt="" />
          </Link>
          <Link to={"/"}>
            <img src={linkedInIcon} alt="" />
          </Link>
        </div>
        <span className={"text-white"}>
          Copyright © 2024 Think Creative Hub
        </span>
      </div>
    </footer>
  );
};

export default Footer;
