import {useDispatch} from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {

  const dispatch=useDispatch();


 const toggleCartHandler=(event) => {
    event.preventDefault();
    dispatch(uiActions.toggle());
    console.log("장바구니");
 };



  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>나의 장바구니</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
