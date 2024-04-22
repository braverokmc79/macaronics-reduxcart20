import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart-slice';




const CartItem = (props) => {
  const dispatch=useDispatch();
  const {id, title, quantity, total, price, img } = props.item;

   const removeItemHandler=()=>{
    dispatch(cartActions.removeItemFromCart(id));
   }

   const addItemHandler=()=>{
    dispatch(cartActions.addItemToCart({id,title,quantity,price}));
   }




  return (
    <li className={classes.item}>
      <header>        
        <h3>{title}</h3>
      
        <div className={classes.price}>
          {total&&  formatterKRW.format(Number(total)) }
          <span className={classes.itemprice}>({formatterKRW.format(price)})</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
      <div>
          <img src={img&&img} style={{maxWidth:"240px",maxHeight:"220px"}}/>
        </div>
    </li>
  );
};


export const  formatterKRW = new Intl.NumberFormat('ko-KR', {
  style: 'currency',
  currency: 'KRW',
});



export default CartItem;
