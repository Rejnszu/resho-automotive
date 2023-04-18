import { configureStore } from "@reduxjs/toolkit";
import { offersApiSlice } from "./api/offersApiSlice";
import { usersApiSlice } from "./api/usersApiSlice";
import { messagesApiSlice } from "./api/messagesApiSlice";
import offersReducer from "./offersPageSlice";
import cookiesReducer from "./cookies-slice";
import userReducer from "./user-slice";

export type RootState = ReturnType<typeof store.getState>;
const store = configureStore({
  reducer: {
    cookies: cookiesReducer,
    user: userReducer,
    offers: offersReducer,
    [offersApiSlice.reducerPath]: offersApiSlice.reducer,
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
    [messagesApiSlice.reducerPath]: messagesApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      offersApiSlice.middleware,
      usersApiSlice.middleware,
      messagesApiSlice.middleware
    ),
});

export default store;
