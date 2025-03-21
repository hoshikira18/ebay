
import { useEffect, useState } from 'react'
import Loading from './Loading'
import TopMenu from './TopMenu'
import SubMenu from './SubMenu'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import MainHeader from './MainHeader'
import { ToastContainer } from 'react-toastify'

export default function MainLayout() {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        window.addEventListener("storage", () => {
            localStorage.getItem('isLoading') === 'false' ? setIsLoading(false) : setIsLoading(true)
        })
    })

    return (
        <>
            <ToastContainer />
            <div className='min-w-[1050px] max-w-[1300px] mx-auto'>
                <div>
                    {isLoading ? <Loading /> : <></>}
                    <TopMenu />
                    <MainHeader />
                    <SubMenu />
                </div>

                <div>
                    <Outlet />
                </div>

                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}
