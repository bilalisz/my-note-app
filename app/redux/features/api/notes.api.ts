import { NOTES } from "@/app/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl=process.env.BASE_URL || "http://localhost:3000"

export const notesApi = createApi({
  reducerPath: "notesapi",
  tagTypes: ['notes'],
  baseQuery: fetchBaseQuery({
    baseUrl:baseUrl
  }),

  
  endpoints: (builder) => ({
    getAllNotes: builder.query({
      query: (name) => `/${name}`,
      transformResponse:(res:any)=>res.reverse(),
      providesTags:["notes"]
     
    }),

    addNote: builder.mutation({
      query: (body) => ({
        url: `/notes`,
        method: "POST",
        body:body,
        transformResponse: (response:any) => {
          return response.data
        },
      }),
     
      invalidatesTags: ["notes"],
    }),

    deleteNote: builder.mutation({
      query: ({ id }) => ({
        url: `/notes/${id}`,
        method: "DELETE",
      }),
     
      invalidatesTags: ["notes"],
    }),
  }),
});

export const { useGetAllNotesQuery, useDeleteNoteMutation,useAddNoteMutation } = notesApi;
