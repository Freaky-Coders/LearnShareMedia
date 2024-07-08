import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface categorieslist {
    categoriesList: string[];
    loading: boolean;
    error: string | null
}

const initialState: categorieslist = {
    categoriesList: [],
    loading: false,
    error: null
}


export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        try {
            const response = await axios.get<string[]>('/api/get-categories');
            return response.data;
        } catch (error) {
            throw new Error("Failed to fetch categories");
        }
    }
)

const categorieslistSlice = createSlice({
    name: "categorieslist",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(fetchCategories.pending, (state) => {
            state.loading = true;
            state.error = null
        })
        .addCase(fetchCategories.fulfilled, (state, action) => {
            state.loading = false;
            state.categoriesList = action.payload;
        })
        .addCase(fetchCategories.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Failed to fetch categories";
        })
    }
})



export default categorieslistSlice.reducer;