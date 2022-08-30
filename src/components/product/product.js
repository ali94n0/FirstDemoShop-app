import styles from "./product.module.css";
import { BiTrash } from "react-icons/bi";
const Product = ({
  changedName,
  incremented,
  decremented,
  clicked,
  product,
}) => {
  return (
    <div className={styles.product}>
      <p>product name : {product.title}</p>
      <p>product price : {product.price}</p>
      <span className={styles.value}>{product.quantity}</span>
      {/* <input
        className={styles.input}
        type="text"
        value={product.title}
        onChange={changedName}
      ></input> */}
      <button
        className={`${styles.button} ${styles.incr}`}
        onClick={incremented}
      >
        +
      </button>
      <button
        className={`${styles.button} ${
          product.quantity === 1 ? styles.remove : styles.decr
        }`}
        onClick={decremented}
      >
        {product.quantity > 1 ? "-" : <BiTrash />}
      </button>
      <button onClick={clicked} className={styles.button}>
        delete
      </button>
    </div>
  );
};

export default Product;
