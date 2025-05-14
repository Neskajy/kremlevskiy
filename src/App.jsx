import { useContext, useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import "./index.scss";
import BurgerWindow from "./components/BurgerWindows/BurgerWindow.jsx";
import { isActiveBurgerContext, cartContext } from "./contexts/context.js";
import CatalogPage from "./pages/CatalogPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import CardPage from "./pages/CardPage.jsx";

export default function App() {
    const [isActiveBurger, setIsActiveBurger] = useState(false);
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem("cart");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <cartContext.Provider value={{cart, setCart}}>
            <isActiveBurgerContext.Provider value={{isActiveBurger, setIsActiveBurger}}>
                <BrowserRouter>
                    <BurgerWindow />
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/catalog" element={<CatalogPage />} />
                        <Route path="/catalog/:id" element={<CardPage />} />
                        <Route path="/cart" element={<CartPage />} />
                    </Routes>
                </BrowserRouter>
            </isActiveBurgerContext.Provider>
        </cartContext.Provider>
    )
}