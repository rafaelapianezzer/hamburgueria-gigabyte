import React from "react";
import styles from "./styles.module.scss";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ProductCard = ({ product, setCartList, cartList }) => {

    const notify = () => toast("Produto já adicionado ao carrinho");

    const addProduct = () => {
        const existingProductIndex = cartList.findIndex((item) => item.id === product.id);
        
        if (existingProductIndex !== -1) {
            notify();
        } else {
            setCartList([...cartList, { ...product, quantity: 1 }]);
        }

        return existingProductIndex;
    };

    const handleClick = () => {
        addProduct();
    };

    return (
        <li>
            <div className={styles.productList}>
                <div className={styles.productImg}>
                    <img className={styles.imgResponsive} src={product.img} alt={product.name} />
                </div>
                <div className={styles.productData}>
                    <h3 className={"heading3"}>{product.name}</h3>
                    <span className={"caption"}>{product.category}</span>
                    <span className={"body-600"}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
                    <button className={styles.buttonAdd} onClick={handleClick}>Adicionar</button>
                </div>
            </div>
        </li>
    );
};
