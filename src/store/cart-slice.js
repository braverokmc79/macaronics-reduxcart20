import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { 
    items: [], 
    totalQuantity: 0, 
    changed:false
 },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    
    addItemToCart(state,action) {
        console.log("아이템 추가");

        const newItem=action.payload;
        const  existingItem=state.items.find(item=>item.id===newItem.id);
        state.totalQuantity++;
        state.changed = true;
        if(!existingItem) {
            state.items.push({
                id:newItem.id,
                price:newItem.price,
                quantity:1,
                totalPrice:newItem.price,
                name:newItem.title,
                img:newItem.img
            });

        }else{
            existingItem.quantity++;
            existingItem.totalPrice += newItem.price;
        }
      // 장바구니에서 항목이 제거되었으므로 changed 값을 true로 설정
      state.changed = false;
    },
    removeItemFromCart(state, action) {
      const id=action.payload;
      const existingItem=state.items.find(item=>item.id===id);
      state.totalQuantity--;
      state.changed = true;
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


