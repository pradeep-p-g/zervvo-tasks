import React, { useState } from "react";
import Search from "../components/search";
import Products from "../components/products";

export default function SinglePageApplication() {
  const [query, setQuery] = useState("");
  const [productsData, setProductsData] = useState([]);

  return (
    <div className="container mx-auto">
      <div className="my-5 px-5">
        <Search
          query={query}
          setQuery={setQuery}
          placeholder="Search Products"
        />
      </div>
      <Products
        products={productsData}
        setProducts={setProductsData}
        search={query}
      />
    </div>
  );
}
