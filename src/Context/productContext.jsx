import { createContext, useState } from "react";

const ProductContext = createContext();

const ProductsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  //   Add to cart function
  const addToCartHandle = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      const updateCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updateCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Cart Total price
  const getCartTotalPrice = () => {
    return cartItems.reduce(
      (total, item) =>
        Number(total) + Number(item.price) * Number(item.quantity),
      0
    );
  };

  //   Remover item from cart function
  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((p) => p.id !== productId);
    setCartItems(updatedCartItems);
  };

  // Increment product quantity Function
  const increaseQuantity = (productId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  //Decrease Product Quantity function
  const decreaseQuantity = (productId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const contextValue = {
    cartItems,
    addToCartHandle,
    removeFromCart,
    getCartTotalPrice,
    increaseQuantity,
    decreaseQuantity,
  };

  return (
    <>
      <ProductContext.Provider value={contextValue}>
        {children}
      </ProductContext.Provider>
    </>
  );
};

export { ProductContext, ProductsProvider };
