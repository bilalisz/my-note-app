import Link from "next/link";
import React from "react";

const ListNavbar = () => {
  return (
    <>
      <div className="shadow-md p-2 flex justify-between items-center">
        <h1 className="font-bold">Notes List</h1>
        <Link href="/add-note" className="add-btn sm:text-sm sm:font-normal">
          Add Note
        </Link>
      </div>
    </>
  );
};

export default ListNavbar;
