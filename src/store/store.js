import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./reducers/category.reducer";

export const store = configureStore({
  reducer: {
    categories: categoryReducer.reducer,
  },
});
