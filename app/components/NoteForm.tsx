"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAddNoteMutation } from "../redux/features/api/notes.api";
import { generateUniqueId } from "../utils";

const NoteForm: React.FC<{}> = () => {
  const [message, setMessage] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [addNoteQuery] = useAddNoteMutation();

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    validationSchema: yup.object({
      title: yup.string().min(3).max(20).trim().required("Title is required"),
      content: yup.string().min(10).max(100).required("Note is required"),
    }),
    onSubmit: (value) => {
      addNoteQuery({ ...value, id: generateUniqueId() });
      setMessage("Form submitted");
      setSubmitted(true);
      formik.values.title = "";
      formik.values.content = "";
    },
  });
  useEffect(() => {
    setTimeout(() => {
      setSubmitted(false);
    }, 2000);
  }, [submitted]);

  return (
    <>
      {submitted && (
        <div
          className="bg-blue-100  px-4 py-3 flex justify-center"
          role="alert"
        >
          <p className="text-sm">{message}</p>
        </div>
      )}
      <form className=" my-5" onSubmit={formik.handleSubmit}>
        <label htmlFor="title" className="block mb-2 text-sm font-medium">
          Title
        </label>
        <input
          type="text"
          name="title"
          className=" text-sm  w-full p-2.5 border border-gray-300 "
          placeholder="Bonnie Green"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.errors.title && formik.touched.title && (
          <p className="mt-2 text-sm text-red-600">
            <span className="font-medium">{formik.errors.title}</span>
          </p>
        )}
        <div>
          <label htmlFor="content" className="block my-2 text-sm font-medium ">
            Note
          </label>
          <textarea
            name="content"
            rows={4}
            className="block p-2.5 w-full  text-sm border border-gray-300"
            placeholder="Write a Note..."
            onChange={formik.handleChange}
            value={formik.values.content}
          />
        </div>
        {formik.errors.content && formik.touched.content && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            <span className="font-medium">{formik.errors.content}</span>
          </p>
        )}
        <div className="float-right mt-5">
          <button
            type="submit"
            className="add-btn sm:text-sm sm:font-normal active:bg-blue-400"
          >
            Add Note
          </button>
        </div>
      </form>
    </>
  );
};

export default NoteForm;
