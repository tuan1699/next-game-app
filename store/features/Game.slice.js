import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//   data: [],
//   loading: false,
//   err: null,
// };

// export const fetchGames = createAsyncThunk("games.fetchGame", async () => {
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "e6947f61d3mshc439afda6c59e21p11695fjsn3fb291e01c2d",
//       "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
//     },
//   };
//   const res = await fetch(
//     "https://free-to-play-games-database.p.rapidapi.com/api/games",
//     options,
//     { mode: "no-cors" }
//   );

//   const data = await res.json();

//   return data;
// });

export const fetchDetail = createAsyncThunk("game.detail", async (id) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e6947f61d3mshc439afda6c59e21p11695fjsn3fb291e01c2d",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  const res = await fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/game?id=" + id,
    options,
    { mode: "no-cors" }
  );

  const data = await res.json();

  console.log(data);

  return data;
});

// const gameListSlice = createSlice({
//   name: "gamesList",
//   initialState: initialState,
//   reducers: {
//     platformFilterChange: (state, action) => {
//       state.filter;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchGames.pending, (state, action) => {
//         state.loading = true;
//       })

//       .addCase(fetchGames.fulfilled, (state, action) => {
//         return {
//           ...state,
//           data: action.payload,
//           loading: false,
//           err: null,
//         };
//       });
//   },
// });

export const gameDetail = createSlice({
  name: "gameDetail",
  initialState: {
    data: {},
    loading: true,
    err: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetail.pending, (state, action) => {
        state.loading = true;
      })

      .addCase(fetchDetail.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      });
  },
});

// export default gameListSlice;
