import { configureStore } from "@reduxjs/toolkit";
import CouterSlice from "./Counter.slice";
import { gameDetail } from "./features/Game.slice";

const store = configureStore({
  reducer: {
    counter: CouterSlice.reducer,
    gameDetail: gameDetail.reducer,
  },
});

export default store;
