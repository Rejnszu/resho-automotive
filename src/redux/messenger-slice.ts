import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Message {
  message: string;
  date: string;
}

interface InitialState {
  messages: Message[];
}

const initialMessengerState: InitialState = {
  messages: [],
};
const messengerSlice = createSlice({
  name: "messenger",
  initialState: initialMessengerState,
  reducers: {
    addNewMessage(state, action: PayloadAction<Message>) {
      state.messages = [...state.messages, action.payload];
    },
  },
});
export const messengerActions = messengerSlice.actions;
export default messengerSlice.reducer;
