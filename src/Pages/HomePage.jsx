import React, { useState } from "react";
import { filterAndSortProducts } from "../utils/productsfilterAndSort";
import FilterAndSort from "../Components/FilterAndSort";
import SingleProductCard from "../Components/SingleProductCard";
import productsList from "../Data/ProductsData.json"
function HomePage() {
  const [products] = useState(productsList); 
  const [searchText, setSearchText] = useState("");
  const [priceSort, setPriceSort] = useState("");

  const filteredProducts = filterAndSortProducts(products, searchText, priceSort);

  return (
    <div className="py-[30px] px-[15px] md:py-[50px] md:px-[80px]">
      <FilterAndSort
        searchText={searchText}
        priceSort={priceSort}
        onSearchChange={setSearchText}
        onSortChange={setPriceSort}
      />

      <div className="flex flex-wrap justify-center gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <SingleProductCard key={product.id} singleProduct={product} />
          ))
        ) : (
          <p className="text-center text-gray-500 text-xl mt-10">
            No products found for “{searchText}”
          </p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
