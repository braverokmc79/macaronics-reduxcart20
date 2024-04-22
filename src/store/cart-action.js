import { createAsyncThunk } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";


export const sendCartData = createAsyncThunk(
  "cart/sendCartData",

  async (cartData, { dispatch }) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "장바구니 데이터를 전송 중입니다!",
      })
    );

    try {
      const response = await fetch(
        "https://react-http-6b4a6.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartData),
        }
      );

      if (!response || !response.ok) {
        throw new Error("장바구니 데이터를 전송하지 못했습니다.");
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "장바구니 데이터가 성공적으로 전송되었습니다!",
        })
      );

    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "장바구니 데이터 전송에 실패했습니다!",
        })
      );
    }
  }
);

//장바구니 가져오기
export const fetchCartData = createAsyncThunk(
  "cart/fetchCartData",

  async (isProductListLoaded, { dispatch }) => {

    if(!isProductListLoaded){
        console.log("isProductListLoaded   Product list  :",isProductListLoaded);
        
          try {


            const response = await fetch(
              "https://jsonplaceholder.typicode.com/albums",
              {
                method: "GET",
              }
            );
      
            if (!response || !response.ok) {
              throw new Error("장바구니 가져오기 실패.");
            }
      
            const data = await response.json();
            const dataSlice=data.slice(0,7);
      
            const cartDataItem=  dataSlice.map((item, index)=>{
                const price=getRandomPrice(300, 500)*100;          
                  return (     
                    {
                      id:item.id,
                      price:price,
                      quantity:1,
                      totalPrice:price,
                      name:item.title,
                      img:`https://source.unsplash.com/random/320*240?random=${index}`          }
                    )
              
          })
      
            
            const cart={
              items: cartDataItem, 
              totalQuantity:cartDataItem.length, 
            }
            
            dispatch(cartActions.replaceCart(cart));
            console.log("장바구니 가져오기 성공");
          } catch (error) {
              console.error("에러(장바구니 가져오기 실패) : " , error );
          }
      
        }
   
    
  }
);

export function getRandomPrice(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



export const getCart = createAsyncThunk(
  "cart/getCart",
  async (cartData, { dispatch }) => {
    // 여기에 비동기 작업을 수행하세요.
  }
);
