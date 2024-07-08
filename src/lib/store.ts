import {configureStore} from '@reduxjs/toolkit';
import filtersidebarReducer from './Features/FilterSidebar/filtersidebarSlice';
import categoriesReducer from './Features/CategoriesFetch/categoriesfetchSlice';


export const makeStore = () => {
    return configureStore({
        reducer: {
            filterSidebarShow: filtersidebarReducer,
            categoriesList: categoriesReducer
        }
    })
}


export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];