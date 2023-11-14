"use client";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import React from "react";
import { notesApi } from "./features/api/notes.api";
import { Provider } from "react-redux";
import { store } from "./store";

type PropsType = {
  children: React.ReactNode;
};

const ReduxProvider: React.FC<PropsType> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default ReduxProvider;
