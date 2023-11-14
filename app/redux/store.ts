import { useSelector,TypedUseSelectorHook } from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import noteSlice, { NotesSlice } from './slices/note.slice';
import { notesApi } from './features/api/notes.api';


export const store=configureStore({
    reducer:{
     [notesApi.reducerPath]:notesApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(notesApi.middleware)
}) ;

export type RootState=ReturnType<typeof store.getState>;
export type RootDispatch=typeof store.dispatch;
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;