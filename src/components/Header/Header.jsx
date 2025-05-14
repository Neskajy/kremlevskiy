import { useContext } from "react";
import Logo from "../../assets/vectors/Logo.svg";
import s from "./Header.module.scss";
import { isActiveBurgerContext } from "../../contexts/context";
import { Link, useLocation } from "react-router-dom";



export default function Header() {
    const { isActiveBurger, setIsActiveBurger } = useContext(isActiveBurgerContext);
    const location  = useLocation();

    function handleClick() {
        setIsActiveBurger(!isActiveBurger);
    }

    return (
        <>  
            <div className={`${s.Header} ${location.pathname == "/" ? "" : s.no__background}`}>
                <div className={s.container}>
                    <div className={s.logo}><img src={ Logo } alt="" /></div>
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
                    <button className={`${s.burgerButton} ${isActiveBurger ? s.active : ""}`} onClick={handleClick}>
                        <div className={s.inner}>
                            <span className={s.top}></span>
                            <span className={s.center}></span>
                            <span className={s.bottom}></span>
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}