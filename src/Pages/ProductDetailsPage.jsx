import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../Data/ProductsData.json";
import { ProductContext } from "../Context/productContext";

function ProductDetails() {

  const {addToCartHandle} = useContext(ProductContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold text-red-600">Product Not Found</h1>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-1 bg-green-500 text-white rounded"
        >
          ← Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 p-4">
      <button
          onClick={() => navigate(-1)}
          className="mb-2.5 font-bold text-lg px-4 py-2 cursor-pointer"
        >
         ← Go Back
        </button>
      <div className="flex flex-col lg:flex-row gap-10">
          
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded shadow"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold">{product.title}</h2>
          <h3 className=" font-bold">{product.shortDescription}</h3>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-lg font-semibold text-green-700">
            ৳ {product.price} / {product.weight}
          </p>
          <button onClick={()=>addToCartHandle(product)} className="cursor-pointer  px-10 py-1 bg-green-600 text-white rounded hover:bg-green-700 hover:shadow">
            Add to Cart
          </button>
         
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
