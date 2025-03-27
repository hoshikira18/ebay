import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import HomePage from "./pages/HomePage";
import MyEbayLayout from "./components/layouts/MyEbayLayout";
import RecentlyViewedPage from "./pages/RecentlyViewed";
import WatchListPage from "./pages/WatchList";
import CheckOutPage from "./pages/CheckOutPage";
import ProductDetail from "./pages/ProductDetail";
import Search from "./pages/Search";
import LoginPage from "./pages/LoginPage";
import AppProvider from "./components/provider/AppProvider";

function App() {
    return (
        <AppProvider>
            <Routes>
                {/* Main layout routes */}
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="cart" element={<CheckOutPage />} />
                    <Route path="search/:q" element={<Search />} />
                    <Route path="products/:id" element={<ProductDetail />} />
                    <Route path="login" element={<LoginPage />} />
                </Route>

                {/* MyEbayLayout routes */}
                <Route path="route2" element={<MainLayout />}>
                    <Route element={<MyEbayLayout />}>
                        <Route path="recently-viewed" element={<RecentlyViewedPage />} />
                        <Route path="watchlist" element={<WatchListPage />} />
                    </Route>
                </Route>
            </Routes>
        </AppProvider>
    )
}

export default App;
