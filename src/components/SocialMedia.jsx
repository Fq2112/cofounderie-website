import React from "react";
import { company } from "../utils/const";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";
import { RiTwitterXFill } from "react-icons/ri";
import classNames from "classnames";

export default function SocialMedia({ withBorder }) {
  const socialMediaList = [
    {
      path: company.social.instagram,
      icon: <SlSocialInstagram className={withBorder ? "w-3 h-3" : "w-4 h-4"} />,
    },
    {
      path: company.social.facebook,
      icon: <SlSocialFacebook className={withBorder ? "w-3 h-3" : "w-4 h-4"} />,
    },
    {
      path: company.social.x,
      icon: <RiTwitterXFill className={withBorder ? "w-3 h-3" : "w-4 h-4"} />,
    },
    {
      path: company.social.linkedin,
      icon: <SlSocialLinkedin className={withBorder ? "w-3 h-3" : "w-4 h-4"} />,
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
        className={classNames(
          "flex gap-x-2 items-center hover:text-secondary transition-all ease-in-out duration-300",
          {
            "justify-center hover:border-none hover:text-white hover:bg-secondary border border-white/35 rounded-full w-6 h-6 hover:scale-150":
              withBorder,
          }
        )}
      >
        {v.icon}
      </li>
    </a>
  ));
}
