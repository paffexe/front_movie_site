import { memo } from "react";

import { FaAd } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { HiDocumentSearch } from "react-icons/hi";
import { BsFillFileEarmarkMusicFill } from "react-icons/bs";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { PiFilmSlate } from "react-icons/pi";
import { FaTheaterMasks } from "react-icons/fa";

import footerLogo from "../assets/LOGOTYPE.svg";
import pmLogo from "../assets/image 8.svg";
import appLogo from "../assets/image 7.svg";

import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsQuestionCircleFill,
} from "react-icons/bs";

import { useTranslation } from "react-i18next";

export const Footer = memo(() => {
  const { t } = useTranslation();
  return (
    <footer className="dark:text-gray-300 py-10 dark:bg-black">
      <div className="container mx-auto rounded-xl px-6 py-10 grid grid-cols-2 sm:justify-center sm:grid-cols-2 md:grid-cols-4 gap-8 dark:bg-[#111111] bg-[#eeecec]">
        <div className="space-y-4">
          <img src={footerLogo} alt="footerLogo" className="w-24" />
          <div className="flex flex-col gap-3">
            <img
              src={pmLogo}
              alt="Google Play"
              className="w-36 cursor-pointer hover:opacity-80 transition"
            />
            <img
              src={appLogo}
              alt="App Store"
              className="w-36 cursor-pointer hover:opacity-80 transition"
            />
          </div>
        </div>

        <div>
          <h3 className="text-red-500 font-semibold mb-4">
            {t("footer.about.title")}
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center text-red-700 gap-2 hover:text-red-500 cursor-pointer">
              <HiDocumentSearch /> {t("footer.about.publicOffer")}
            </li>
            <li className="flex items-center text-red-700 gap-2 hover:text-red-500 cursor-pointer">
              <FaAd /> {t("footer.about.advertising")}
            </li>
            <li className="flex items-center text-red-700 gap-2 hover:text-red-500 cursor-pointer">
              <BsQuestionCircleFill /> {t("footer.about.faq")}
            </li>
            <li className="flex items-center text-red-700 gap-2 hover:text-red-500 cursor-pointer">
              <IoMdContact /> {t("footer.about.contacts")}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-red-500 font-semibold mb-4">
            {t("footer.categories.title")}
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center text-red-700 gap-2 hover:text-red-500 cursor-pointer">
              <PiFilmSlate /> {t("footer.categories.movies")}
            </li>
            <li className="flex items-center text-red-700 gap-2 hover:text-red-500 cursor-pointer">
              <FaTheaterMasks /> {t("footer.categories.theater")}
            </li>
            <li className="flex items-center text-red-700 gap-2 hover:text-red-500 cursor-pointer">
              <BsFillFileEarmarkMusicFill /> {t("footer.categories.concerts")}
            </li>
            <li className="flex items-center text-red-700 gap-2 hover:text-red-500 cursor-pointer">
              <MdOutlineSportsSoccer /> {t("footer.categories.sports")}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-red-500 font-semibold mb-4">
            {t("footer.contact.title")}
          </h3>
          <p className="text-red-500 font-semibold mb-4">
            {t("footer.contact.phone")}
          </p>
          <h3 className="text-red-500 font-semibold mb-3">
            {t("footer.contact.follow")}
          </h3>
          <div className="flex text-red-500 space-x-4 text-2xl">
            <a href="#" className="hover:text-red-500">
              <BsInstagram />
            </a>
            <a href="#" className="hover:text-red-500">
              <BsFacebook />
            </a>
            <a href="#" className="hover:text-red-500">
              <BsYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});
