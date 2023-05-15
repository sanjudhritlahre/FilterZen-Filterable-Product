import React from "react";
import SearchBar from "../search_bar/SearchBar";
import ProductTable from "../product_table/ProductTable";
import { useState } from "react";
import "./FilterableProductTable.css";

export default function FilterableProductTable({ stockProducts }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className="filterable-product-table-container">
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        stockProducts={stockProducts}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}
