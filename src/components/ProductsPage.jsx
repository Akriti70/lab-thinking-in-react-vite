// src/components/ProductsPage.jsx
import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products] = useState(jsonData);
  const [searchText, setSearchText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  const handleInStockChange = (checked) => {
    setInStockOnly(checked);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        searchText={searchText}
        onSearchChange={handleSearchChange}
        inStockOnly={inStockOnly}
        onInStockChange={handleInStockChange}
      />
      <ProductTable
        products={products}
        searchText={searchText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

export default ProductsPage;
