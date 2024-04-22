import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const productItems = useSelector((state) => state.product.items);


  return (
    <section className={classes.products}>
      <h2>마음에 드는 제품을 구매하세요.</h2>
      <ul className="productUl">
        {productItems &&
          productItems.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              img={product.img && product.img}
            />
          ))}
      </ul>
    </section>
  );
};

export default Products;
