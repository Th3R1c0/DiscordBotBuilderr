import { configureStore } from "@reduxjs/toolkit";
import flowReducer from "./slices/flowSlice";
import ThemeReducer from './slices/themeSlice'

export default configureStore({
  reducer: {
    flow: flowReducer,
    Theme: ThemeReducer,
  }
});
