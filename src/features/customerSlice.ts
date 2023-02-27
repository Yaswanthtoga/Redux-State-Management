import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CustomerState{
    value:string[]
}

const initialState:CustomerState = {
    value:[]
}

const customerItems = createSlice({
    name:"customeritems",
    initialState,
    reducers:{
        addItem:(state,action:PayloadAction<string>)=>{
            state.value.push(action.payload);
        },
        removeItem:(state,action:PayloadAction<number>)=>{
            state.value.splice(action.payload,1);
        }
    }
});

export const { addItem,removeItem } = customerItems.actions;
export default customerItems.reducer;