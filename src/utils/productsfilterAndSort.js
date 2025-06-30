

export const filterAndSortProducts = (products, searchText, priceSort) =>{
     let result = [...products];

  if (searchText.trim() !== "") {
    result = result.filter(product =>
      product.title.toLowerCase().includes(searchText.toLowerCase()) ||
      product.description.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  if (priceSort === "lowToHigh") {
    result.sort((a, b) => a.price - b.price);
  } else if (priceSort === "highToLow") {
    result.sort((a, b) => b.price - a.price);
  }

  return result;
}