import categories from "../../apis/categories";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCategory } from "../reducers/category.reducer";
import { ApiUrls } from "../../constants/urls";

export const fetchCategoriesAction = createAsyncThunk(
  "/categories",
  async (_, { dispatch }) => {
    const response = await categories.get(ApiUrls.category);
    dispatch(setCategory(response.data));
  }
);
