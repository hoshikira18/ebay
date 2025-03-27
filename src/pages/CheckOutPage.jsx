import { useEffect, useState } from "react";
import AuthComponent from "../components/auth/AuthComponent";

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:9999/cartItems")
      .then((response) => response.json())
      .then((data) => {
        const updatedData = data.map((item) => ({
          ...item,
          quantity: item.quantity || 1,
        }));
        setCartItems(updatedData);
        setMessage("You've updated your cart.");
      })
      .catch((error) => console.error("Error fetching cart items:", error));
  }, []);

  const increaseQuantity = (id, currentQuantity) => {
    const newQuantity = currentQuantity + 1;

    fetch(`http://localhost:9999/cartItems/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: newQuantity }),
    })
      .then(() => {
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item
          )
        );
      })
      .catch((error) => console.error("Error updating quantity:", error));
  };

  const updateQuantity = (id, newQuantity) => {
    fetch(`http://localhost:9999/cartItems/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: newQuantity }),
    })
      .then(() => {
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item
          )
        );
      })
      .catch((error) => console.error("Error updating quantity:", error));
  };

  const removeItem = (id) => {
    fetch(`http://localhost:9999/cartItems/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
      })
      .catch((error) => console.error("Error deleting item:", error));
  };


  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <AuthComponent>
      <div className="max-w-5xl p-4 mx-auto">
        <h2 className="text-2xl font-bold">Check out</h2>
        <div className="p-4 bg-white border rounded-lg shadow-md">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center py-4 border-b last:border-b-0"
            >
              <img
                src={item.images[0]}
                alt={item.title}
                className="object-cover w-24 h-24 mr-4 rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-blue-600">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="mt-1 font-bold text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <label htmlFor="qty" className="text-gray-700">Qty</label>
                <select
                  className="p-1 border rounded"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, Number(e.target.value))
                  }
                >
                  {[...Array(10).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="button"
                className="ml-2 text-sm text-red-500 hover:underline"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="p-4 mt-4 bg-gray-100 rounded-lg shadow-md">
          <div className="flex justify-between">
            <span>Item ({cartItems.length})</span>
            <span className="font-bold">${getTotalPrice().toFixed(2)}</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between text-lg font-semibold">
            <span>Subtotal</span>
            <span className="text-green-600">${getTotalPrice().toFixed(2)}</span>
          </div>
          <button type="button" className="w-full py-2 mt-3 text-white transition bg-blue-500 rounded-lg hover:bg-blue-600">
            Go to checkout
          </button>
        </div>
      </div>
    </AuthComponent>
  );
};

export default CheckoutPage;
