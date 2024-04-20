import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart'; 
import Layout from './components/Layout/Layout'; 
import Products from './components/Shop/Products'; 
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';


let isInitial =true;


function App() {  
  const dispatch=useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible); // 장바구니 표시 여부
  const cart = useSelector(state => state.cart); // 장바구니 데이터
  const notification=useSelector(state => state.ui.notification);

  // useEffect 훅을 사용하여 cart 데이터가 변경될 때마다 실행
  useEffect(() => {
    const sendCardData = async () => {
          dispatch(uiActions.showNotification({
            status:'pending',
            title:'Sending...',
            message:'장바구니 데이터를 전송 중입니다!'
          }));

          const response = await fetch('https://react-http-6b4a6.firebaseio.com/cart.json', {
            method: 'PUT',
            body: JSON.stringify(cart),
          })

          if (!response || !response.ok) {;
            throw new Error('장바구니 데이터를 전송하지 못했습니다.');
          }

          dispatch(uiActions.showNotification({
            status:'success',
            title:'Success!',
            message:'장바구니 데이터가 성공적으로 전송되었습니다!'
          }));

    };


    if(isInitial){
      isInitial=false;
      return;
    }

    sendCardData().catch((error) => {
      //console.error(" 에러 :", error);
       dispatch(uiActions.showNotification({
          status:'error',
          title:'Error!',
          message:'장바구니 데이터 전송에 실패했습니다!'
        }));
     });

  }, [cart, dispatch]); // useEffect 의존성 배열에 cart와 dispatch 추가

  return (
    <Fragment>
       {notification &&  <Notification   status={notification.status}  title={notification.title} message={notification.message}   />  }

       
        <Layout> {/* 레이아웃 컴포넌트 */}
          {/* 장바구니 표시 여부에 따라 Cart 컴포넌트 조건부 렌더링 */}
          {showCart && <Cart />} 
          
          {/* 제품 목록 컴포넌트 */}
          <Products />
        </Layout>
    </Fragment>
  );
}

export default App;
