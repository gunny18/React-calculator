import { configureStore } from "@reduxjs/toolkit";
import calcReducer from "./calculatorSlice";

const store = configureStore({
  reducer: {
    calculator: calcReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export default store;
