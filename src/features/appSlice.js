import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    roomId: null,
  }, //ja nemam ovaa zagrada me ostavi 2 dena so problem na use dispatch mi vajgashe
  //obect is not a function..........
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },
  },
});

export const { enterRoom } = appSlice.actions;

export const selectRoomId = (state) => state.app.roomId;

export default appSlice.reducer;
