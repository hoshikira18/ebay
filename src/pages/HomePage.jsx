import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getAllProduct, getAddProductToWatchList } from "../api"; // Import the new API function
import { Link } from "react-router-dom"; // Import Link for navigation

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(10); // Show 10 products initially
  const [message, setMessage] = useState(""); // State to store the success or error message

  useEffect(() => {
    getAllProduct().then((data) => {
      setProducts(data);
    });
  }, []);

  // Handle toggling between See More and See Less
  const handleToggle = (e) => {
    e.preventDefault(); // Prevent page reload
    if (visibleProducts === 10) {
      setVisibleProducts(products.length); // Show all products (20 in this case)
    } else {
      setVisibleProducts(10); // Show only 10 products
    }
  };

  // Function to handle adding product to watchlist
  const handleAddToWatchList = async (product) => {
    const response = await getAddProductToWatchList(product);

    if (response.success) {
      setMessage(response.message); // Show success message
    } else {
      setMessage(response.message); // Show error message
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <Carousel
        showArrows={true}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showThumbs={false}
      >
        <div>
          <img
            src="https://raw.githubusercontent.com/John-Weeks-Dev/ebay-clone/refs/heads/main/public/images/banner/1.png"
            alt="Banner 1"
          />
        </div>
        <div>
          <img
            src="https://raw.githubusercontent.com/John-Weeks-Dev/ebay-clone/refs/heads/main/public/images/banner/2.png"
            alt="Banner 2"
          />
        </div>
        <div>
          <img
            src="https://raw.githubusercontent.com/John-Weeks-Dev/ebay-clone/refs/heads/main/public/images/banner/3.png"
            alt="Banner 3"
          />
        </div>
      </Carousel>

      <div className="text-2xl font-bold mt-4 mb-6 px-4">Products</div>

      {/* Show the message */}
      {message && <div className="text-center text-red-500">{message}</div>}

      <div className="grid grid-cols-5 gap-4">
        {products.slice(0, visibleProducts).map((product) => (
          <div key={product.id} className="border p-4 flex flex-col">
            {/* Link to product detail page */}
            <Link to={`/product/${product.id}`} className="flex-1">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="font-bold mt-2">{product.title}</div>
              <div className="text-sm text-gray-600">{product.description}</div>
              <div className="text-lg font-semibold mt-2">${product.price}</div>
              <div className="text-sm text-gray-500 mt-1">
                Created at: {new Date(product.created_at).toLocaleDateString()}
              </div>
            </Link>

            {/* Add to Watchlist button */}
            <button
              onClick={() => handleAddToWatchList(product)}
              className="mt-4 w-full py-2 px-4 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Add to Watchlist
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center my-5">
        <div className="flex items-center before:h-px before:flex-1 before:bg-gray-300 before:content-[''] after:h-px after:flex-1 after:bg-gray-300 after:content-['']">
          <button
            type="button"
            onClick={handleToggle}
            className="flex items-center rounded-full border border-gray-300 bg-secondary-50 px-3 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mr-1 h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
            {visibleProducts === 10 ? "See More" : "See Less"}
          </button>
        </div>
      </div>
    </div>
  );
}
