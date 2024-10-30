import { createSlice } from '@reduxjs/toolkit'
import { statusEnum } from './statusEnum';

export const authSlice = createSlice({
  
  name: 'auth',
  
  initialState: {
    status: statusEnum.CHECKING,
    uid: null,
    displayName: null,
    email: null,
    photoURL: null,
    errorMessage: null,
  },
  
  reducers: {
    login: ( state, { payload } ) => {
      state.status = statusEnum.AUTHENTICATE; 
      state.uid = payload.uid;
      state.displayName = payload.displayName;
      state.email = payload.email;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
    },
    logout: ( state, { payload } ) => {
      state.status = statusEnum.NO_AUTHENTICATE;
      state.uid = null;
      state.displayName = null;
      state.email = null;
      state.photoURL = null;
      state.errorMessage = payload?.errorMessage;
    },
    checkCredentials: ( state ) => {
      state.status = statusEnum.CHECKING;
    }
  },
})

export const { login, logout, checkCredentials } = authSlice.actions;