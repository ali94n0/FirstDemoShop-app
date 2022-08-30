import { useState } from "react";
import { useProductsAction } from "../../components/providers/ProductsProviders";
import styles from "./search.module.css";

const SearchComponent = ({ filter, sort }) => {
  const [value, setValue] = useState("");
  const dispatch = useProductsAction();

  const searchHandler = (e) => {
    dispatch({ type: "filter", selectedOption: filter });
    dispatch({ type: "search", event: e });
    dispatch({ type: "sort", selectedOption: sort });
    setValue(e.target.value);
  };
  return (
    <div className={styles.searchContainer}>
      search for:
      <input
        type="text"
        placeholder="search for ..."
        value={value}
        onChange={searchHandler}
      />
    </div>
  );
};

export default SearchComponent;
