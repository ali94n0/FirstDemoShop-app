import React, { useState } from "react";
import { useProductsAction } from "../providers/ProductsProviders";
import styles from "./filter.module.css";
import SelectComponent from "../../common/Select/select";
import SearchComponent from "../../common/Search/search";

const filterOptions = [
  { value: "", label: "All" },
  { value: "X", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
];
const sortOptions = [
  { value: "ascending", label: "Ascending" },
  { value: "descending", label: "Descending" },
];
const Filter = () => {
  const dispatch = useProductsAction();
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const filterHandler = (selectedOption) => {
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption: sort });
    setFilter(selectedOption);
  };
  const sortHandler = (selectedOption) => {
    console.log(selectedOption);
    dispatch({ type: "sort", selectedOption });
    setSort(selectedOption);
  };
  return (
    <>
      <SearchComponent filter={filter} sort={sort} />
      <div className={styles.filter}>
        <p>filter products based on:</p>
        <SelectComponent
          title="filter by size:"
          defaultValue={filter}
          onChange={filterHandler}
          options={filterOptions}
        />
        <SelectComponent
          title="sort by price:"
          defaultValue={sort}
          onChange={sortHandler}
          options={sortOptions}
        />
      </div>
    </>
  );
};

export default Filter;
