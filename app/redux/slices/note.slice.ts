"use client";

import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NOTES } from "@/app/types";

interface InitalState {
  Notes: NOTES[];
  isLoading:boolean;
  selectedNote:NOTES[]
}

const initialState: InitalState = {
    Notes: [{
      "id": "1",
      "title": "Object 1",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod."
    }],
    selectedNote:[],
    isLoading:false,

};



export const NotesSlice = createSlice({
  name: "notes-slice",
  initialState: initialState,

  reducers: {
    addNote:(state,action:PayloadAction)=>{}
    },
  },
);

export const {  } = NotesSlice.actions;
export default NotesSlice.reducer;
