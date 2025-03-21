import { useState, useEffect } from "react";

function RecentlyViewedPage() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9999/recentlyViewed")
    .then((response) => response.json())
    .then((data) => setProduct(data))
    .catch((error) => console.error("Error fetching recently viewed items:", error));
  }, []);

  const clearAll = async () => {
    try {
      // Delete each product individually
      await Promise.all(
        product.map((item) =>
          fetch(`http://localhost:9999/recentlyViewed/${item.id}`, {
            method: "DELETE",
          })
        )
      );

      // Clear state after deletion
      setProduct([]);
    } catch (error) {
      console.error("Error clearing recently viewed items:", error);
    }
  };

  return (
    <div className="p-4">
            <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Recently Viewed</h2>
        {product.length > 0 && (
          <button
            onClick={clearAll}
            className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
          >
            Clear All
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {product.map((item) => (
          <div key={item.id} className="p-4 border rounded-lg shadow-md">
            <img src={item.url} alt={item.title} className="object-cover w-full h-40 rounded-md" />
            <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
            <p className="mt-1 font-bold">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentlyViewedPage;
