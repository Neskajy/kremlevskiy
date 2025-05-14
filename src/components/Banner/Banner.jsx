import banner from "../../assets/raster/banner.jpg";
import s from "../Banner/Banner.module.scss";
import { Link } from "react-router-dom";
import Cart_icon from "../../assets/vectors/Vector.svg";
import Table_icon from "../../assets/vectors/table.svg";


export default function Banner() {
    return (
        <>
            <div className={s.Banner}>
                <div className={s.background}>
                    <img src={banner} alt="" />
                </div>
                <div className={s.container}>
                    <h1>Кремлевский ресторан</h1>
                    <div className={s.description}>
                        Элитный ресторан в центре города Москвы
                    </div>
                    <div className={s.buttons}>
                        <Link to="/">
                            <button className={s.btnToBasket}>
                                Заказать
                                <img src={ Cart_icon } alt="" />
                            </button>
                        </Link>
                        <Link to="/">
                            <button className={s.btnToBasket}>
                                Забронировать
                                <img src={ Table_icon } alt="" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}