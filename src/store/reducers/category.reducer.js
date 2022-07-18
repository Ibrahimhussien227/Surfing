import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { fetchCategoriesAction } from "../actions/categories.action";

const initialState = {
  categories: [],
};

export const categoryReducer = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.categories = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategoriesAction.fulfilled, (state, action) => {
      return { ...state, ..._.mapKeys(action.payload, "id") };
    });
  },
});

export const { setCategory } = categoryReducer.actions;
