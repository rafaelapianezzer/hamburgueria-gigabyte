import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/api";
import { CartModal } from "../../components/CartModal";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      const getProducts = async () => {
         const { data } = await api.get("products");
         setProductList(data);
      };
      getProducts();

      const storedCartList = JSON.parse(localStorage.getItem("@cart")) || [];
      setCartList(storedCartList);
   }, []);


   useEffect(() => {
      if (cartList.length > 0) localStorage.setItem("@cart", JSON.stringify(cartList));
   }, [cartList]);

   return (
      <>
         <Header  cartList={cartList} setIsOpen={setIsOpen} />
         <ProductList productList={productList} setCartList={setCartList} cartList={cartList}/>
         {
            isOpen && 
               <CartModal setCartList={setCartList} setIsOpen={setIsOpen} cartList={cartList} />
         }
      </>
   );
};
