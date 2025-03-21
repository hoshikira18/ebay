
import { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai'
import { BiLoaderCircle } from 'react-icons/bi'
import { useNavigate } from "react-router-dom";

export default function MainHeader() {

    const [items, setItems] = useState([])
    const [isSearching, setIsSearching] = useState(null)
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    return (
        <>
            <div id="MainHeader" className="border-b">
                <nav className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                    <div className="flex items-center w-full bg-white">
                        <div className="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full px-3 py-5 mx-auto">
                            <a href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="117" height="48" viewBox="0 0 122 48.592" id="gh-logo" aria-labelledby="ebayLogoTitle"><title id="ebayLogoTitle">eBay Home</title><g><path fill="#F02D2D" d="M24.355 22.759c-.269-5.738-4.412-7.838-8.826-7.813-4.756.026-8.544 2.459-9.183 7.915zM6.234 26.93c.364 5.553 4.208 8.814 9.476 8.785 3.648-.021 6.885-1.524 7.952-4.763l6.306-.035c-1.187 6.568-8.151 8.834-14.145 8.866C4.911 39.844.043 33.865-.002 25.759c-.05-8.927 4.917-14.822 15.765-14.884 8.628-.048 14.978 4.433 15.033 14.291l.01 1.625z"></path><path fill="#0968F6" d="M46.544 35.429c5.688-.032 9.543-4.148 9.508-10.32s-3.947-10.246-9.622-10.214-9.543 4.148-9.509 10.32 3.974 10.245 9.623 10.214zM30.652.029l6.116-.034.085 15.369c2.978-3.588 7.1-4.65 11.167-4.674 6.817-.037 14.412 4.518 14.468 14.454.045 8.29-5.941 14.407-14.422 14.454-4.463.026-8.624-1.545-11.218-4.681a33.237 33.237 0 01-.19 3.731l-5.994.034c.09-1.915.185-4.364.174-6.322z"></path><path fill="#FFBD14" d="M77.282 25.724c-5.548.216-8.985 1.229-8.965 4.883.013 2.365 1.94 4.919 6.7 4.891 6.415-.035 9.826-3.556 9.794-9.289v-.637c-2.252.02-5.039.054-7.529.152zm13.683 7.506c.01 1.778.071 3.538.232 5.1l-5.688.032a33.381 33.381 0 01-.225-3.825c-3.052 3.8-6.708 4.909-11.783 4.938-7.532.042-11.585-3.915-11.611-8.518-.037-6.665 5.434-9.049 14.954-9.318 2.6-.072 5.529-.1 7.945-.116v-.637c-.026-4.463-2.9-6.285-7.854-6.257-3.68.021-6.368 1.561-6.653 4.2l-6.434.035c.645-6.566 7.53-8.269 13.595-8.3 7.263-.04 13.406 2.508 13.448 10.192z"></path><path fill="#92C821" d="M91.939 19.852l-4.5-8.362 7.154-.04 10.589 20.922 10.328-21.02 6.486-.048-18.707 37.251-6.85.039 5.382-10.348-9.887-18.393"></path></g></svg>
                            </a>

                            <div className="w-full">
                                <div className="relative">

                                    <div className="flex items-center">
                                        <div className="relative flex items-center border-2 border-gray-900 w-full p-2 rounded-3xl">
                                            <button type="button" className="flex items-center">
                                                <AiOutlineSearch size={22} />
                                            </button>

                                            <input
                                                className="
                                                    w-full
                                                    placeholder-gray-400
                                                    text-sm
                                                    pl-3
                                                    focus:outline-none
                                                "
                                                onChange={(e) => setSearch(e.target.value)}
                                                placeholder="Search for anything"
                                                type="text"
                                            />

                                            {isSearching ? <BiLoaderCircle className="mr-2 animate-spin" size={22} /> : null}

                                            {items.length > 0 ?
                                                <div className="absolute bg-white max-w-[910px] h-auto w-full z-20 left-0 top-12 border p-1">
                                                    {items.map((item) => (
                                                        <div className="p-1" key={item.id}>
                                                            <a
                                                                href={`/product/${item?.id}`}
                                                                className="flex items-center justify-between w-full cursor-pointer hover:bg-gray-200 p-1 px-2"
                                                            >
                                                                <div className="flex items-center">
                                                                    <img className="rounded-md" width="40" src={`${item?.url}/40`} alt="pic" />
                                                                    <div className="truncate ml-2">{item?.title}</div>
                                                                </div>
                                                                <div className="truncate">£{(item?.price / 100).toFixed(2)}</div>
                                                            </a>
                                                        </div>
                                                    ))}
                                                </div>
                                                : null}
                                        </div>

                                        <button onClick={() => {
                                            navigate(`/search/${search}`)
                                        }} type="button" className="flex items-center bg-blue-600 text-sm font-semibold text-white p-[11px] ml-2 px-14 rounded-3xl">
                                            Search
                                        </button>

                                        <div className="text-xs px-2 hover:text-blue-500 cursor-pointer">Advanced</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
