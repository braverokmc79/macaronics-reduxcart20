import { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart'; 
import Layout from './components/Layout/Layout'; 
import Products from './components/Shop/Products'; 
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-action';
import { cartActions } from './store/cart-slice';
import { productList } from './store/product-actions';
import Footer from './components/Layout/Footer';
import ScrollTop from './components/UI/ScrollTop';

let isInitial = true;

function App() {  
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible); // 장바구니 표시 여부
  const cart = useSelector(state => state.cart); // 장바구니 데이터
  const notification = useSelector(state => state.ui.notification);

  const [isProductListLoaded, setIsProductListLoaded] = useState(false);

  useEffect(() => {
    //1.상품 목록 가져오기
    if (!isProductListLoaded) {
      setIsProductListLoaded(true);
      
      dispatch(productList(isProductListLoaded));  
      
      //2.장바구니 목록 가져오기
     // dispatch(fetchCartData(isProductListLoaded));    
    }
  }, []);



  //2.장바구니 넣기
  useEffect(() => {   
    if (isInitial) {
      isInitial = false;
      return;
    }

    // 장바구니가 변경될 때에만 호출된다.
    if (cart.changed) {
      //dispatch(sendCartData(cart));
      dispatch(cartActions.addItemToCart(cart));

      //dispatch(cartActions.addItemToCart(cart));
    }
  }, [cart, dispatch]); // useEffect 의존성 배열에 cart와 dispatch 추가

  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}       
      <Layout> {/* 레이아웃 컴포넌트 */}
        {/* 장바구니 표시 여부에 따라 Cart 컴포넌트 조건부 렌더링 */}
        {showCart && <Cart />} 
        {/* 제품 목록 컴포넌트 */}
        {isProductListLoaded  && <Products />}
      </Layout>

      <Footer/>
      <ScrollTop />
    </Fragment>
  );
}

export default App;
