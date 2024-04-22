import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: { 
    items: [], 
    totalQuantity: 0, 
 },
  reducers: {
    setProduct(state, action) {
      //state.items = action.payload.items;
      state.items = action.payload;
    },
    

  }
});

export const productActions = productSlice.actions;
export default productSlice;


