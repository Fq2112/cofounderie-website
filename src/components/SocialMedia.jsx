import React from "react";
import { company } from "../utils/const";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";
import { RiInstagramFill, RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import classNames from "classnames";

export default function SocialMedia({
  withBorder,
  withName = false,
  withIconFill = false,
  textColor = "text-unset",
}) {
  const socialMediaList = [
    {
      name: "Instagram",
      path: company.social.instagram,
      icon: withIconFill ? (
        <RiInstagramFill className={withBorder ? "w-3 h-3" : "w-4 h-4"} />
      ) : (
        <SlSocialInstagram className={withBorder ? "w-3 h-3" : "w-4 h-4"} />
      ),
    },
    {
      name: "Facebook",
      path: company.social.facebook,
      icon: withIconFill ? (
        <FaFacebookF className={withBorder ? "w-3 h-3" : "w-4 h-4"} />
      ) : (
        <SlSocialFacebook className={withBorder ? "w-3 h-3" : "w-4 h-4"} />
      ),
    },
    {
      name: "Twitter",
      path: company.social.x,
      icon: withIconFill ? (
        <RiTwitterXFill className={withBorder ? "w-3 h-3" : "w-4 h-4"} />
      ) : (
        <RiTwitterXFill className={withBorder ? "w-3 h-3" : "w-4 h-4"} />
      ),
    },
    {
      name: "Linkedin",
      path: company.social.linkedin,
      icon: withIconFill ? (
        <FaLinkedinIn className={withBorder ? "w-3 h-3" : "w-4 h-4"} />
      ) : (
        <SlSocialLinkedin className={withBorder ? "w-3 h-3" : "w-4 h-4"} />
      ),
    },
  ];

  return socialMediaList.map((v, idx) => (
    <a
      key={`social-media-${idx}`}
      href={v.path}
      target="_blank"
      rel="noreferrer"
    >
      <li
        className={
          textColor +
          classNames(
            " flex gap-x-2 items-center hover:text-secondary transition-all ease-in-out duration-300",
            {
              "justify-center hover:border-none hover:text-white hover:bg-secondary border border-white/35 rounded-full w-6 h-6 hover:scale-150":
                withBorder,
            }
          )
        }
      >
        {v.icon}
        {withName && <span className="font-semibold">{v.name}</span>}
      </li>
    </a>
  ));
}
