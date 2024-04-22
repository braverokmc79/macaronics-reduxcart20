import { createAsyncThunk } from "@reduxjs/toolkit";
import { productActions } from "./product-slice";
import { getRandomPrice } from "./cart-action";

export const productList = createAsyncThunk(
  "product/productList",
  async (isProductListLoaded, { dispatch }) => {

    try{

        console.log(" isProductListLoaded  :",isProductListLoaded);

        if(!isProductListLoaded){
          const response = await fetch("https://jsonplaceholder.typicode.com/albums", {
            method: "GET",
            });

            if (!response || !response.ok) {
            throw new Error("상품 가져오기 실패.");
            }

            console.log("1. productItem response:",response);

            const data = await response.json();
            const productItem = data.map((item, index) => {
                    const price = getRandomPrice(300, 500) * 100;
                    return {
                        id: item.id,
                        price: price,
                        quantity: 1,
                        totalPrice: price,
                        title: item.title,
                        name: item.title,
                        img: `https://source.unsplash.com/random/240*220?random=${index}`,
                    };
            });
            
            console.log("2. productItem :",productItem);
           dispatch(productActions.setProduct(productItem));

        }

    }catch(error){
        console.error("에러(제품 가져오기 실패) : " , error );
    }


  }
);
