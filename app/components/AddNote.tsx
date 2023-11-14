import React from "react";
import NoteForm from "./NoteForm";

const AddNoteCnt = () => {
  return (
    <div className=" shadow-md w-full mx-4   sm:w-[50%] h-[85vh] rounded">
      <div className="bg-slate-200 px-3 py-2 rounded-t  ">
        <h1>Add New Note</h1>
      </div>
      <div className="mx-4 mt-2">
        <NoteForm />
      </div>
    </div>
  );
};

export default AddNoteCnt;
