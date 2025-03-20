import { useState } from "react";
import ClientOnly from "../ClientOnly";
import { AiOutlineShoppingCart } from "react-icons/ai";

const TopMenu = () => {
    const [isMenu, setIsMenu] = useState(false)
    return (
        <>
            <div id="TopMenu" className="border-b">
                <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                    <ul
                        id="TopMenuLeft"
                        className="flex items-center text-[11px] text-[#333333] px-2 h-8"
                    >
                        <li className="relative px-3">
                            <div
                                id="AuthDropdown"
                                className={`
                                    absolute bg-white w-[200px] text-[#333333] z-40 top-[20px] left-0 border shadow-lg 
${isMenu ? 'visible' : 'hidden'}
                                `}
                            >
                                <div>
                                    <div className="flex items-center justify-start gap-1 p-3">
                                        <img width={50} src={"pic"} alt="pic" />
                                        <div className="font-bold text-[13px]">Khuyen</div>
                                    </div>
                                </div>

                                <div className="border-b" />

                                <ul className="bg-white">
                                    <li className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
                                        <a href={"/"}>
                                            My orders
                                        </a>
                                    </li>
                                    <li
                                        className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer"
                                    >
                                        Sign out
                                    </li>
                                </ul>

                            </div>
                        </li>
                        <li className="px-3 hover:underline cursor-pointer">
                            Daily Deals
                        </li>
                        <li className="px-3 hover:underline cursor-pointer">
                            Help & Contact
                        </li>
                    </ul>
                    <ul
                        id="TopMenuRight"
                        className="flex items-center text-[11px] text-[#333333] px-2 h-8"
                    >
                        <li
                            className="flex items-center gap-2 px-3 hover:underline cursor-pointer"
                        >
                            <img width={32} src="https://cdn-icons-png.flaticon.com/512/555/555515.png" alt="pic" />
                            Ship to
                        </li>
                        <ClientOnly>
                            <li className="px-3 hover:underline cursor-pointer">
                                <div className="relative">
                                    <AiOutlineShoppingCart size={22} />
                                    {/* {cart.cartCount() > 0 ? <div className="absolute text-[10px] -top-[2px] -right-[5px] bg-red-500 w-[14px] h-[14px] rounded-full text-white">
                                        <div className=" flex items-center justify-center -mt-[1px]">{cart.cartCount()}</div>
                                    </div>
                                        : <></>} */}
                                </div>
                            </li>
                        </ClientOnly>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default TopMenu