import { configureStore } from "@reduxjs/toolkit"
import reservationSlice from "../features/reservationSlice";
import customerSlice from "../features/customerSlice";

export const store = configureStore({
    reducer:{
        reservations:reservationSlice,
        customerItems:customerSlice
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// console.log(store.getState)