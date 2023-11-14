import { NOTES } from "@/app/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const notesApi = createApi({
  reducerPath: "notesapi",
  tagTypes: ['notes'],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),

  
  endpoints: (builder) => ({
    getAllNotes: builder.query({
      query: (name) => `/${name}`,
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
