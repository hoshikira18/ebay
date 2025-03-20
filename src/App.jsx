import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage /> },
        ],
    },
    {
        path: "/route2",
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "/route2/3", element: <HomePage /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
