import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Category {
  category: string;
  subCategory: string[];
}

interface CategoriesListResponse {
  success: boolean;
  message: string;
  statusCode: number;
  data: Category[];
}

interface CategoriesListState {
  categoriesList: CategoriesListResponse | null;
  error: string | null;
  loading: boolean;
}

const initialState: CategoriesListState = {
  categoriesList: null,
  error: null,
  loading: false,
};

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await axios.get('/api/get-categories');
    return response.data as CategoriesListResponse;
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categoriesList = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch categories';
      });
  },
});

export default categoriesSlice.reducer;
