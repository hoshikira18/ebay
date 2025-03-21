import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import HomePage from "./pages/HomePage";
import MyEbayLayout from "./components/layouts/MyEbayLayout";
import RecentlyViewedPage from "./pages/RecentlyViewed";
import WatchListPage from "./pages/WatchList";
import CheckOutPage from "./pages/CheckOutPage";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: "/checkout",
                element: <CheckOutPage />
            },
            { path: "/products/:id", element: <ProductDetail /> }
        ],
    },
    {
        path: "/route2",
        element: <MainLayout />,
        children: [
            {
                path: "/route2", element: <MyEbayLayout />, children: [
                    { path: "/route2/recently-viewed", element: <RecentlyViewedPage /> },
                    { path: "/route2/watchlist", element: <WatchListPage /> },
                ]
            },
        ],
    },

]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
