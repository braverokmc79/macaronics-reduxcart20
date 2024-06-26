import {createSlice} from '@reduxjs/toolkit';

const uiSlice=createSlice({
    name:"ui",
    initialState:{ cartIsVisible:false, notification:null},
    reducers:{       
        toggle(state){
            //console.log("장바구니 클릭");
            state.cartIsVisible =!state.cartIsVisible;
        },
        showNotification(state, action){
           
            state.notification={
                status: action.payload.status, 
                title:action.payload.title,
                message:action.payload.message
            };
        }
    }
});


//dispatch  로 데이터를 넘겨주기위해
export const uiActions=uiSlice.actions;


//index 에서 ui:uiSlice.store 로 사용
//state 값을 가져올때 state.ui  로 접근
export default uiSlice;
