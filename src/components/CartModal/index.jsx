import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "../CartModal/styles.module.scss";
import { useOutClick } from "../hooks/useOutClick";
import { useKeydown } from "../hooks/useKeydown";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const CartModal = ({ cartList, setCartList, setIsOpen }) => {

   const notify = () => toast("Seu carrinho está vazio");

   const modalRef = useOutClick(() => {
      setIsOpen(false);
   });

   const buttonRef = useKeydown("Escape", (element) => {
      element.click()
   });

   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   const increaseProductCount = (product) => {
      const existingProductIndex = cartList.findIndex((item) => item.id === product.id);
      const updatedProductList = [...cartList];
      updatedProductList[existingProductIndex].quantity++;
      setCartList(updatedProductList);
   };

   const decreaseProductCount = (product) => {
      const existingProductIndex = cartList.findIndex((item) => item.id === product.id);
      const updatedProductList = [...cartList];
      updatedProductList[existingProductIndex].quantity--;
      if (updatedProductList[existingProductIndex].quantity <= 0) {
         removeProduct(product);
      } else {
         setCartList(updatedProductList);
      }
   };

   const removeProduct = (product) => {
      const updatedCartList = cartList.filter(p => p !== product);
      setCartList(updatedCartList);
   };

   const removeAllProducts = () => {
      setCartList([]); 
      setIsOpen(false); 
      notify();
   };

   return (
      <div role="dialog" className={styles.modalOverlay}>
         <div className={styles.modalBox} ref={modalRef}>
            <div className={styles.headerModal}>
               <h2 className="heading3">Carrinho de compras</h2>
               <button ref={buttonRef} onClick={() => setIsOpen(false)} aria-label="close" title="Fechar">
                  <MdClose size={21} />
               </button>
            </div>
            <div className={styles.contentModal}>
               <ul>
                  {cartList.map((product) => (
                     <CartItemCard 
                        decreaseProductCount={decreaseProductCount} 
                        removeProduct={removeProduct} 
                        increaseProductCount={increaseProductCount} 
                        key={product.id} 
                        product={product} 
                     />
                  ))}
               </ul>
            </div>
            <div className={styles.contentFooter}>
               <div className={styles.modalFooter}>
                  <span className={styles['body-600']}>Total </span>
                  <span className={`${'body-600'} ${styles.price}`}>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
               </div>
               <button className={`${styles.buttonModal} headline`} onClick={removeAllProducts}>Remover todos</button>
            </div>
         </div>
      </div>
   );
};
