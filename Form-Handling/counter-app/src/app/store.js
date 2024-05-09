import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/counter-slice.js";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
