import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { 
    items: [], 
    totalQuantity: 0, 
 },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    
    addItemToCart(state,action) {
        const newItem=action.payload;
        const  existingItem=state.items.find(item=>item.id===newItem.id);
       // console.log("existingItem ", existingItem);
        state.totalQuantity++;


        if(!existingItem) {
            state.items.push({
                id:newItem.id,
                price:newItem.price,
                quantity:1,
                totalPrice:newItem.price,
                name:newItem.title
            });

        }else{
         //   console.log("기존 제품 수량 업데이트");
            existingItem.quantity++;
            existingItem.totalPrice += newItem.price;
        }

    },
    removeItemFromCart(state, action) {
      const id=action.payload;
      const existingItem=state.items.find(item=>item.id===id);
      state.totalQuantity--;

      if(existingItem && existingItem.quantity === 1) {
        state.items=state.items.filter(item=>item.id!==id);
      }else{
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
