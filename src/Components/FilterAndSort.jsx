import React from "react";

function FilterAndSort({
  searchText,
  priceSort,
  onSearchChange,
  onSortChange,
}) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 bg-white p-4 rounded-md shadow-sm mb-8 border border-gray-200">
      <div className="w-full md:w-[400px]">
        <label
          htmlFor="search"
          className="block text-gray-700 font-medium mb-1"
        >
          Search Products
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search by product name or description..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="w-full md:w-[220px]">
        <label htmlFor="sort" className="block text-gray-700 font-medium mb-1">
          Sort by Price
        </label>
        <select
          id="sort"
          value={priceSort}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="">-- Select --</option>
          <option value="lowToHigh">Low → High</option>
          <option value="highToLow">High → Low</option>
        </select>
      </div>
    </div>
  );
}

export default FilterAndSort;
