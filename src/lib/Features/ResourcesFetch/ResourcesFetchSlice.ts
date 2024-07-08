import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Resource {
  _id: string;
  title: string;
  description: string;
  file: string;
  category: string;
  subcategory: string;
  tags: string[];
}

interface ResourcesResponse {
  success: boolean;
  message: string;
  statusCode: number;
  data: Resource[];
}

interface ResourcesState {
  ResourcesData: ResourcesResponse | null;
  error: string | null;
  loading: boolean;
}

const initialState: ResourcesState = {
  ResourcesData: null,
  error: null,
  loading: false,
};

export const fetchResources = createAsyncThunk(
  'resources/fetchResources',
  async () => {
    const response = await axios.get('/api/get-pdfs');
    return response.data as ResourcesResponse;
  }
);

const resourcesSlice = createSlice({
  name: 'resources',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchResources.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchResources.fulfilled, (state, action) => {
        state.loading = false;
        state.ResourcesData = action.payload;
      })
      .addCase(fetchResources.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch categories';
      });
  },
});

export default resourcesSlice.reducer;
