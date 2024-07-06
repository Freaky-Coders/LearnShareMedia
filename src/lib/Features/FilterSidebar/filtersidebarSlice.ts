import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Filtersidebar {
    filtersidebarshow: boolean;
}


const initialState: Filtersidebar = {
    filtersidebarshow: true
}


const filtersidebarSlice = createSlice({
    name: "filtersidebar",
    initialState,
    reducers: {
        toggleFilterSidebar: (state) => {
            state.filtersidebarshow = !state.filtersidebarshow;
        },
        // setSidebarVisibility: (state, action: PayloadAction<boolean>) => {
        //     state.filtersidebarshow = action.payload;
        // },
    },
})


export const {toggleFilterSidebar} = filtersidebarSlice.actions;
export default filtersidebarSlice.reducer;