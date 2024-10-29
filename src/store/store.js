import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../auth/store'

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
  }
})