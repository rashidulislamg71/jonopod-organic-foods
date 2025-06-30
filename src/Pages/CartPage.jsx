import React, { useContext } from "react";
import { ProductContext } from "../Context/productContext";
import { Link } from "react-router-dom";

function CartPage() {
  const {
    cartItems,
    removeFromCart,
    getCartTotalPrice,
    decreaseQuantity,
    increaseQuantity,
  } = useContext(ProductContext);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center mt-20 text-xl font-semibold text-gray-600">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/005/006/007/small/no-item-in-the-shopping-cart-click-to-go-shopping-now-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
          alt=""
        />
        Your cart is empty
        <Link
          to="/"
          className="hover:shadow mt-[10px] text-blue-700 py-1 px-3 border rounded-3xl "
        >
          Go To Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Shopping Cart</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-center">
              <th className="p-2 border">Image</th>
              <th className="p-2 border">Product</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Quantity</th>
              <th className="p-2 border">Total</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-t text-center">
                <td className="p-2 border">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-12 w-12 rounded"
                  />
                </td>
                <td className="p-2 border">{item.title}</td>
                <td className="p-2 border">৳ {item.price}</td>
                <td className="p-2 border">
                  <div className="flex flex-col items-center">
                    <span className="text-base font-medium text-gray-700">
                      {item.quantity} kg
                    </span>
                    <div className="mt-2 flex gap-10">
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-4 h-4  border text-sm font-bold hover:bg-green-600 hover:text-white transition cursor-pointer"
                      >
                        +
                      </button>
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-4 h-4 border  text-sm font-bold hover:bg-red-600 hover:text-white transition cursor-pointer"
                      >
                        −
                      </button>
                    </div>
                  </div>
                </td>

                <td className="p-2 border">৳ {item.price * item.quantity} </td>
                <td className="p-2 border">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-center cursor-pointer bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-right mt-6">
        <h2 className="text-xl font-bold">
          Total: <span className="text-green-600">৳ {getCartTotalPrice()}</span>
        </h2>
      </div>
    </div>
  );
}

export default CartPage;
