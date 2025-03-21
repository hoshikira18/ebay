import { useState, useEffect } from "react";

function WatchListPage() {
  const [product, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:9999/watchList")
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) =>
        console.error("Error fetching recently viewed items:", error)
      );
  }, []);

  const filteredProducts = product.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Watchlist</h2>


        <div className="relative w-1/2">
          <input
            type="text"
            placeholder="Search your Watchlist"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none"
          />
        </div>

      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((item) => (
          <div key={item.id} className="p-4 border rounded-lg shadow-md">
            <img
              src={item.images[0]}
              alt={item.title}
              className="object-cover w-full h-40 rounded-md"
            />
            <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
            <p className="mt-1 font-bold">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WatchListPage;
