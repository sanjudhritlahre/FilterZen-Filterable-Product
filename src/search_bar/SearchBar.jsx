import React from "react";
import './SearchBar.css';

export default function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <>
      <>
        <form className="search-bar-container">
          <div className="search-bar">
            <span>
              <i class="bx bx-search-alt"></i>
            </span>
            <input
              type="text"
              placeholder="Search products..."
              value={filterText}
              onChange={(e) => onFilterTextChange(e.target.value)}
            />
          </div>

          <label className="product-stocks-checkbox-label" htmlFor="#">
            <input
              type="checkbox"
              className="stock-checkbox"
              checked={inStockOnly}
              onChange={(e) => onInStockOnlyChange(e.target.checked)}
            />{" "}
            Only show products in stock!
          </label>
        </form>
      </>
    </>
  );
}
