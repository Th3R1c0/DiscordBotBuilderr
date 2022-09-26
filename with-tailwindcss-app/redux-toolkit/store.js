import { configureStore } from "@reduxjs/toolkit";
import flowReducer from "./slices/flowSlice";

export default configureStore({
  reducer: {
    flow: flowReducer
  }
});
