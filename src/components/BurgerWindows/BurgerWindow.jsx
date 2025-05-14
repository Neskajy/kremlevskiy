import s from "../BurgerWindows/BurgerWindow.module.scss";
import { isActiveBurgerContext } from "../../contexts/context";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function BurgerWindow() {
    const { isActiveBurger, setIsActiveBurger } = useContext(isActiveBurgerContext);
        
    function handleClick() {
        setIsActiveBurger(!isActiveBurger);
    }
    return (
        <>
            <div className={`${s.BurgerWindow} ${isActiveBurger ? s.active : ""}`}>
                <div className={s.container}>
                    <nav className={s.nav}>
                        <ul className={s.ul}>
                            <li>
                                <Link to="/">Главная</Link>
                            </li>
                            <li>
                                <Link to="/catalog">Доставка</Link>
                            </li>
                            <li>
                                <Link to="/cart">Корзина</Link>
                            </li>
                            <li>
                                <Link to="/">Контакты</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}