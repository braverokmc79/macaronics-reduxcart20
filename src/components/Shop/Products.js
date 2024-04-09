import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>마음에 드는 제품을 구매하세요.</h2>
      <ul>
        <ProductItem
          title='테스트'
          price={6}
          description='첫 번째 제품입니다. 어메이징!'
        />
      </ul>
    </section>
  );
};

export default Products;
