import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../auth/store'
import { journalSlice } from '../journal/store'

export default configureStore({
  reducer: {
    auth:     authSlice.reducer,
    journal:  journalSlice.reducer,
  }
})