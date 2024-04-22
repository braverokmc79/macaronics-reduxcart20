import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../../store/cart-slice';
import { formatterKRW } from '../Cart/CartItem';

const ProductItem = (props) => {
  const cart=useSelector((state)=>state.cart);
  const dispath=useDispatch();
  const { title, price, description , id,img} = props;


  const addToCartHandler =()=>{
    dispath(cartActions.addItemToCart({
      id,
      title,
      price,
      img      
    }));
  }
  return (
    <li className={classes.item}>
      <Card>
        <img src={img}  style={{width:"240px",height:"220px"}}/>
        <header>
          <h3 style={{height:"58px"}}>{title}</h3>
          <div className={classes.price}>{formatterKRW.format(price)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>장바구니 추가</button>
        </div>
      </Card>
    </li>
  );
};


  

export default ProductItem;
