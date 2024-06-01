import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { employeeManagerApi } from "./services/employeeManagerApi";

export const store = configureStore({
  reducer: {
    [employeeManagerApi.reducerPath]: employeeManagerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employeeManagerApi.middleware),
});

setupListeners(store.dispatch);
