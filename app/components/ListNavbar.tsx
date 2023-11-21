import Link from "next/link";
import React from "react";

type PropsType = {
  title: string;
  buttonProps: { name: string; link: "/" | "/add-note" };
};

const ListNavbar: React.FC<PropsType> = ({ title, buttonProps }) => {
  return (
    <>
      <div className="shadow-md p-2 flex justify-between items-center">
        <h1 className="font-bold">{title}</h1>
        <Link
          href={buttonProps.link}
          className="add-btn xs:text-xs max-w-xs sm:font-normal"
        >
          {buttonProps.name}
        </Link>
      </div>
    </>
  );
};

export default ListNavbar;
