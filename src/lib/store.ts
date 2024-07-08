import {configureStore} from '@reduxjs/toolkit';
import filtersidebarReducer from './Features/FilterSidebar/filtersidebarSlice';
import categoriesReducer from './Features/CategoriesFetch/categoriesfetchSlice';
import ResourcesReducer from './Features/ResourcesFetch/ResourcesFetchSlice';


export const makeStore = () => {
    return configureStore({
        reducer: {
            filterSidebarShow: filtersidebarReducer,
            categoriesList: categoriesReducer,
            resourcesData: ResourcesReducer
        }
    })
}


export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];