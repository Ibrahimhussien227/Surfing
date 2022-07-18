import categories from "../../apis/categories";
// import { FETCH_CATEGORIES } from "./types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setPosts } from "../reducers/category.reducer";

// export const fetchCategories = () => async (dispatch) => {
//   const response = await categories.get("/posts");
//   dispatch({ type: FETCH_CATEGORIES, payload: response.payload });
// };

export const fetchCategoriesAction = createAsyncThunk(
  "/categories",
  async (_, { dispatch }) => {
    const response = await categories.get("/hostcategory");
    dispatch(setPosts(response.data));
  }
);
