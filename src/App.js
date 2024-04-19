import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart'; // 장바구니 컴포넌트 import
import Layout from './components/Layout/Layout'; // 레이아웃 컴포넌트 import
import Products from './components/Shop/Products'; // 제품 목록 컴포넌트 import

function App() {  
  // Redux store에서 상태값 가져오기
  const showCart = useSelector(state => state.ui.cartIsVisible); // 장바구니 표시 여부
  const cart = useSelector(state => state.cart); // 장바구니 데이터

  // useEffect 훅을 사용하여 cart 데이터가 변경될 때마다 실행
  useEffect(() => {
    // 서버로 장바구니 데이터 전송
    fetch('https://react-http-6b4a6.firebaseio.com/', {
      method: 'PUT',
      body: JSON.stringify(cart), // cart 데이터를 JSON 형태로 변환하여 전송
    })
    .then(response => {
      // 서버 응답이 성공적이지 않으면 오류 throw
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    })
    .catch(error => {
      // 오류 발생 시 콘솔에 기록
      console.error('There has been a problem with your fetch operation:', error);
    });
  }, [cart]); // useEffect 의존성 배열에 cart 추가

  return (
    <Layout> {/* 레이아웃 컴포넌트 */}
      {/* 장바구니 표시 여부에 따라 Cart 컴포넌트 조건부 렌더링 */}
      {showCart && <Cart />} 
      
      {/* 제품 목록 컴포넌트 */}
      <Products />
    </Layout>
  );
}

export default App;
