import React from "react";
import NoteForm from "./NoteForm";
import ListNavbar from "./ListNavbar";

const AddNoteCnt = () => {
  return (
    <div className=" shadow-md w-full mx-4   sm:w-[65%] h-[85vh]">
      {/* <div className="bg-slate-200 px-3 py-2 rounded-t  flex justify-between items-center">
        <h1>Add New Note</h1>
        <Link href="/" className="add-btn text-xs sm:font-normal">
          Note List
        </Link>
      </div> */}
      <ListNavbar
        title="Add New Note"
        buttonProps={{ name: "Note List", link: "/" }}
      />
      <div className="mx-4 md:mx-24 md:my-14">
        <NoteForm />
      </div>
    </div>
  );
};

export default AddNoteCnt;
