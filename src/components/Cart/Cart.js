import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  return (
    <Card className={classes.cart}>
      <h2>장바구니</h2>
      <ul>
        <CartItem
          item={{ title: '아이템1', quantity: 3, total: 18, price: 6 }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
