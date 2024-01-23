import classNames from "classnames";
import Link from "next/link";
import React from "react";

const PageTitle = ({
  title,
  children,
  links,
  imageUrl,
  divider = false,
  isSlate = false,
}) => {
  return (
    <div
      className={classNames("relative w-full bg-slate-100", {
        "bg-slate-100": isSlate,
      })}
    >
      <div className="relative top-[-101px] w-full flex justify-center">
        <div className="relative w-full">
          <div
            className="absolute w-full h-full bg-cover bg-center after:content-[''] after:absolute after:inset-0 after:bg-secondary-400/70 after:w-full after:h-full"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
          <div className="relative container mx-auto mb-12">
            <div className="flex justify-between uppercase text-left pt-40 pb-4">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold uppercase mb-2 tracking-wide">
                  {title}
                </h1>
                <span className="text-lg">{children}</span>
              </div>
              <ol className="breadcrumb">
                {links.map((e, i) => {
                  return e.url ? (
                    <li key={i} className="breadcrumb-item">
                      <Link href={e.url}>{e.name}</Link>
                    </li>
                  ) : (
                    <li
                      key={i}
                      className="breadcrumb-item active"
                      aria-current="page"
                    >
                      {e.name}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
          {divider && (
            <div
              className="shape-divider"
              data-position="bottom"
              data-height="80"
            >
              <img src="/images/divider/wave-1.svg" alt="divider" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
