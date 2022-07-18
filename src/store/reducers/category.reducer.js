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
    setPosts: (state, action) => {
      state.categories = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategoriesAction.fulfilled, (state, action) => {
      return { ...state, ..._.mapKeys(action.payload, "id") };
    });
  },
});

export const { setPosts } = categoryReducer.actions;

// const reducer = (state = {}, action) => {
//   switch (action.type) {
//     case FETCH_CATEGORIES:
//       return { ...state, ..._.mapKeys(action.payload, "id") };
//     default:
//       return state;
//   }
// };

// export default reducer;
