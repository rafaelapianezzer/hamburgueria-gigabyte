import { useState } from "react";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./styles.module.scss";
import logo from "../../assets/logo.png";

export const Header = ({ cartList, setIsOpen }) => {
   const [value, setValue] = useState("");

   return (
      <div className={styles.colorHeader}>
         <header className={styles.header}>
            <div>
               <img src={logo} className={styles.logo} />
            </div>
            <div className={styles.container}>
               <button onClick={() => setIsOpen(true)} className={styles.cartButton}>
                  <MdShoppingCart size={25} color="white" className={styles.cartIcon} />
                  <span className="caption">{cartList.length}</span>
               </button>
               <form className={styles.searchForm}>
                  <input
                     type="text"
                     value={value}
                     onChange={(e) => setValue(e.target.value)}
                  />
                  <button type="submit">
                     <MdSearch size={20} />
                  </button>
               </form>
            </div>
         </header>
      </div>
   );
};
