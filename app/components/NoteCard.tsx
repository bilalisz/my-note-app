"use client";
import React from "react";

type PropsType = {
  title?: string;
  content?: string;
  selected?: boolean;
};

const NoteCard: React.FC<PropsType> = (props) => {
  const { title, content, selected } = props;

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
  };

  return (
    <div className="flex justify-start gap-2 w-full px-4 py-2 shadow hover:bg-slate-300  sm:max-h-28 active:bg-slate-300">
      <div className="w-[10%] flex sm:items-center sm:my-1 py-1 md:mt-0 ">
        <input
          type="checkbox"
          // checked={selected}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={handleSelect}
        />
      </div>
      <div className="">
        <h2 className=" font-semibold capitalize">{title}</h2>
        <h4 className="text-sm font-light first-letter:capitalize">
          {content}
        </h4>
      </div>
    </div>
  );
};
NoteCard.defaultProps = {
  title: "Title",
  selected: false,
};

export default NoteCard;
