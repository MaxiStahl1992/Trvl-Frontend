import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const emptySlice = createSlice({
	name: "emptySlice",
	initialState: initialState,
	reducers: {
		setEmpty: (state, action) => {
			initialState;
		},
	},
});
