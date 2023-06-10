import { configureStore } from "@reduxjs/toolkit";
import { emptySlice } from "./slices/empty";

export const store = configureStore({
	reducer: {
		empty: emptySlice.reducer,
	},
});
