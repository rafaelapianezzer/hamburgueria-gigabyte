import { MdDelete } from "react-icons/md";

export const CartItemCard = ({ product, removeProduct, increaseProductCount, decreaseProductCount }) => {

   const handleRemoveProductClick = () => {
      removeProduct(product)
   }

   return (
      <li>
         <div className={"listProducts"}>
            <img src={product.img} alt={product.name} />
            <div className={"contentLi"}>
               <h3 className={"heading3"}>{product.name}</h3>
               <p>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
               <div className={"counter"}>
                  <span>Quantidade:</span>
                  <div className={"counterButton"}>
                  <button style={{ fontSize: "20px" }} onClick={() => decreaseProductCount(product)} > - </button>
                  <span> {product.quantity}   </span>
                  <button style={{ fontSize: "20px" }} onClick={() => increaseProductCount(product)} > + </button>
                  </div>
               </div>
            </div>
         </div>
         <button className={"buttonDelete"} onClick={handleRemoveProductClick} aria-label="delete" title="Remover item">
            <MdDelete size={21} />
         </button>
      </li>
   );
};
