import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context/productContext";

function SingleProductCard({ singleProduct }) {
  const { image, title, shortDescription, price, weight, id } = singleProduct;
  const { addToCartHandle } = useContext(ProductContext);

  const shortDescriptionLength =
    shortDescription.length > 40
      ? shortDescription.slice(0, 35) + "..."
      : shortDescription;

      
  return (
    <div className="w-full max-w-[280px] h-auto">
      <div className="flex flex-col gap-2 rounded shadow hover:shadow-lg p-3 bg-white transition duration-200">
        <Link to={`/productDetails/${id}`}>
          <img
            src={image}
            alt={title}
            className="h-40 w-full object-cover mb-2 rounded"
            loading="lazy"
          />
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-sm text-gray-600">{shortDescriptionLength}</p>
        </Link>
        <p className="flex justify-between font-semibold text-green-700 mt-3">
          <span>৳ {price}</span> <span>{weight}g</span>
        </p>
        <button
          onClick={() => addToCartHandle(singleProduct)}
          className="cursor-pointer w-full mt-4 px-3 py-1 bg-green-500 hover:bg-green-600 text-white font-semibold rounded transition duration-200"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default SingleProductCard;
