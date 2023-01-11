import { createSlice } from "@reduxjs/toolkit";

const CouterSlice = createSlice({
  name: "Counter",
  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state, action) => {
      state.value++;
    },

    decrement: (state, action) => {
      state.value--;
    },
  },
});

export default CouterSlice;
export const counterSelector = (state) => state.counter.value;
