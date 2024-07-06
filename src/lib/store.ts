import {configureStore} from '@reduxjs/toolkit';
import filtersidebarReducer from './Features/FilterSidebar/filtersidebarSlice';


export const makeStore = () => {
    return configureStore({
        reducer: {
            filterSidebarShow: filtersidebarReducer
        }
    })
}


export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];