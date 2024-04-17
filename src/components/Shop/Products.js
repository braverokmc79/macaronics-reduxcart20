import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "나의 첫번째 책",
    description: "내가 처음으로 쓴 책",
  },
  {
    id: "p2",
    price: 7,
    title: "나의 두번째 책",
    description: "내가 두번째로 쓴 책",
  },
  {
    id: "p3",
    price: 8,
    title: "나의 세번째 책",
    description: "내가 세번째로 쓴 책",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>마음에 드는 제품을 구매하세요.</h2>
      <ul>

        {DUMMY_PRODUCTS && DUMMY_PRODUCTS.map((product)=>(          
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />         
        ))
      }

        
      </ul>
    </section>
  );
};

export default Products;
