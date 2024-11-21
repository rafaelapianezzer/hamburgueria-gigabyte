import { ProductCard } from "./ProductCard";
import "../ProductList/styles.module.scss";

export const ProductList = ({ productList, setCartList, cartList }) => {

   return (
         <ul>
            {productList.map((product) => (
               <ProductCard  setCartList = {setCartList} cartList={cartList} key={product.id} product={product} />
            ))}
         </ul>
   );
};


