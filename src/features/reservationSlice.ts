import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ReservationState{
    value:string[]
}

const initialState:ReservationState = {
    value:[]
}

export const reservationSlice = createSlice({
    name:"reservation",
    initialState,
    reducers:{
        reservationAdd:(state,action:PayloadAction<string>)=>{
            state.value.push(action.payload);
        },
        reservationRemove:(state,action:PayloadAction<number>)=>{
            state.value.splice(action.payload,1);
        }
    }
});

export const { reservationAdd } = reservationSlice.actions;
export const { reservationRemove } = reservationSlice.actions;
export default reservationSlice.reducer