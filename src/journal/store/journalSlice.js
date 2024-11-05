import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null,
  },
  reducers: {
    addNewEmptyNote: ( state, action ) => {
        state.notes.push ( action.payload );
    },
    setNotes: ( state, action ) => {
        state.notes = action.payload;
    },
    getNote: ( state, action ) => {

      
    },
    updateNote: ( state, action ) => {

      
    },
    removeNote: ( state, action ) => {

      
    },
    setActiveNote: ( state, action ) => {
        state.active = action.payload;
    },

    setSaving: ( state, action ) => {
        state.isSaving = action.payload;
    },

  },
})

export const { 
    addNewEmptyNote,
    setNotes,
    getNote,
    updateNote,
    removeNote,
    setActiveNote,
    setSaving } = journalSlice.actions;