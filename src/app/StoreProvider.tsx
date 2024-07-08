'use client';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '@/lib/store';
import { fetchCategories } from '@/lib/Features/CategoriesFetch/categoriesfetchSlice';
import { fetchResources } from '@/lib/Features/ResourcesFetch/ResourcesFetchSlice';

const store = makeStore();

const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    store.dispatch(fetchCategories());
    store.dispatch(fetchResources());
  }, []);

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
