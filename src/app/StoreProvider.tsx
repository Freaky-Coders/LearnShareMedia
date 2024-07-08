'use client';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '@/lib/store';
import { fetchCategories } from '@/lib/Features/CategoriesFetch/categoriesfetchSlice';

const store = makeStore();

const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    store.dispatch(fetchCategories());
  }, []);

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
