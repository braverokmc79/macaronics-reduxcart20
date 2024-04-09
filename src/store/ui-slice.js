import {createSlice} from '@reduxjs/toolkit';

const uiSlice=createSlice({
    name:"ui",
    initialState:{ cartIsVisible:false},
    reducers:{       
        toggle(state){
            console.log("장바구니 클릭");
            state.cartIsVisible =!state.cartIsVisible;
        },
    }
});

export const uiActions=uiSlice.actions;
export default uiSlice;
