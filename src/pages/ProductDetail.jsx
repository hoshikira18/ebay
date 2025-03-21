import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../api"
import { BsShieldCheck } from "react-icons/bs"

function ProductDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [image, setImage] = useState(product?.images[0])

    useEffect(() => {

        getProductById(id).then(data => {
            setProduct(data)
            setImage(data.images[0])
        })

    }, [id])

    if (!product) return <div>Loading...</div>

    return (
        <div className="container mx-auto p-4 grid md:grid-cols-2 gap-6">
            {/* Image Section */}
            <div className="grid grid-cols-12 gap-3">
                <div className="mt-4 flex flex-col col-span-2 space-y-2">
                    {product.images.map((img) => (
                        <img
                            key={img}
                            src={img}
                            alt="Thumbnail"
                            className="w-full aspect-square object-cover rounded-md"
                            onClick={() => setImage(img)}
                        />
                    ))}
                </div>
                <img
                    src={image}
                    alt={product.name}
                    className="w-full rounded-lg shadow-md col-span-10 aspect-square object-cover"
                />
            </div>

            {/* Details Section */}
            <div>
                <h1 className="text-2xl font-bold">{product.title}</h1>
                <p className="text-gray-600">Description: {product.description}</p>
                <p className="text-xl font-semibold mt-2">
                    $ {product.price.toFixed(2)}
                </p>

                <div className="mt-4 space-y-2">
                    <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-3xl">
                        Buy It Now
                    </button>
                    <button type="button" className="w-full border border-gray-400 text-gray-700 py-2 rounded-3xl">
                        Add to Cart
                    </button>
                    <button type="button" className="w-full border border-gray-400 text-gray-700 py-2 rounded-3xl">
                        <span>Add to Watchlist</span>
                    </button>
                </div>

                <div className="mt-4 flex items-center space-x-2">
                    <BsShieldCheck className="text-green-600" size={20} />
                    <p className="text-gray-600">eBay Money Back Guarantee</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
