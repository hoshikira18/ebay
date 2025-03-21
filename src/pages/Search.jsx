import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom"
import { addProductToWatchList, getAllProduct } from "../api";

function Search() {
    const { q } = useParams()
    console.log(q)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProduct().then((data) => {
            setProducts([...data.filter(d => (!q || d?.title?.toLowerCase().includes(q?.toLowerCase())))]);
        });
    }, [q]);

    // Function to handle adding product to watchlist
    const handleAddToWatchList = async (product) => {
        await addProductToWatchList(product);
    };
    return (
        <div className="container-xl mx-auto my-5">
            <h2 className="font-semibold text-2xl mb-5">Search results for &quot;{q}&quot;</h2>
            <div className="grid grid-cols-5 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="border p-4 flex flex-col">
                        {/* Link to product detail page */}
                        <Link to={`/products/${product.id}`} className="flex-1">
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
                            type="button"
                            onClick={() => handleAddToWatchList(product)}
                            className="mt-4 w-full py-2 px-4 text-white bg-blue-600 rounded hover:bg-blue-700"
                        >
                            Add to Watchlist
                        </button>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Search
