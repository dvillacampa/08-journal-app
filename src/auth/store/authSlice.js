import { createSlice } from '@reduxjs/toolkit'
import { statusEnum } from './';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: statusEnum.NOAUTHENTICATE,
    uid: null,
    displayName: null,
    email: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: ( state, action ) => {

    },
    logout: ( state, action ) => {

    },
    checkCredentials: ( state ) => {
      state.status = statusEnum.CHECKING;
    }
  },
})

export const { login, logout, checkCredentials } = authSlice.actions;