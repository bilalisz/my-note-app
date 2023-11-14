"use client";

import React, { useState, useEffect } from "react";
import ListNavbar from "./ListNavbar";
import NoteCard from "./NoteCard";
import { NOTES } from "@/app/types";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import {
  useDeleteNoteMutation,
  useGetAllNotesQuery,
} from "../redux/features/api/notes.api";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

type PropsType = {
  data?: NOTES[];
};

const ListView: React.FC<PropsType> = () => {
  // const [notes, setNotes] = useState<NOTES[]>([]);

  // useEffect(() => {
  //   if (data.length) {
  //     setNotes(data);
  //   }
  // }, []);
  const { data, isError, isLoading, error } = useGetAllNotesQuery("notes");
  const [deleteNote] = useDeleteNoteMutation();

  let notes: NOTES[] = data;

  const handleDragEnd = (result: any) => {
    let items: NOTES[] = Array.from(notes);
    const [reorderedItem] = items.splice(result.source.index, 1);
    if (!result.destination) {
      let filterItems = notes.find((item) => item.id === reorderedItem.id);
      // setNotes(filterItems);
      deleteNote({ id: filterItems?.id });
    } else {
      items.splice(result.destination.index, 0, reorderedItem);
      notes = items;
    }
  };

  const handleDragUpdate = (result: any) => {};

  return (
    <DragDropContext onDragEnd={handleDragEnd} onDragUpdate={handleDragUpdate}>
      <div className=" shadow-md w-full mx-4   sm:w-[65%] h-[85vh]">
        <ListNavbar />
        {!isLoading && !isError ? (
          <div className="   overflow-auto w-full  h-[76vh]">
            <Droppable droppableId="notes">
              {(provided) => (
                <div
                  className="px-2 py-1 flex flex-col gap-3 my-3 "
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {notes?.map((note, index) => {
                    return (
                      <Draggable
                        key={note.id}
                        draggableId={`draggable-${note.id}`}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                          >
                            <NoteCard
                              title={note.title}
                              content={note.content}
                            />
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ) : isError ? (
          <TextMessage text={"Error in API"} />
        ) : isLoading ? (
          <TextMessage text="Loading..." />
        ) : null}
      </div>
    </DragDropContext>
  );
};

export default ListView;

const TextMessage = ({ text }: { text: string }) => (
  <div className="flex  items-center justify-center mt-10">
    <h1 className="text-lg font-normal text-slate-700">{text}</h1>
  </div>
);
