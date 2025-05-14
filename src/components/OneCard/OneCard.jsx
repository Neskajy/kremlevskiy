import s from "./OneCard.module.scss";
import { Link, useParams } from "react-router-dom";
import left__icon from "../../assets/vectors/backward__icon.svg";
import { Cards } from "../../server__response/cards";
import { cartContext } from "../../contexts/context";
import { useContext } from "react";

export default function OneCard() {
    const {id} = useParams();

    const {cart, setCart} = useContext(cartContext);

    const card = Cards.find((props_element) => props_element.id == id );

    function addToCart() {
        const newCard = {...card, count: 1}

        const existingCardIndex = cart.findIndex((element) => 
            element.id === newCard.id
        );

        if (existingCardIndex !== -1) {
            const updatedCart = [...cart];

            updatedCart[existingCardIndex].count += 1;
            setCart(updatedCart);
        } else {
            setCart([...cart, newCard]);
        }
    }

    return (
        <>
            <div className={s.OneCard}>
                <div className={s.container}>
                    <Link to="/catalog">
                        <button className={s.btn3}>
                            <img src={left__icon} alt="" />
                            Продолжить покупки
                        </button>
                    </Link>
                    <div className={s.product__info}>
                        <div className={s.img}>
                            <img src={`${card.img}`} alt="" />
                        </div>
                        <div className={s.about}>
                            <h3 className={s.name}>
                                {card.name}
                            </h3>
                            <div className={s.text}>
                                <div className={s.description}>
                                    {card.composition}
                                </div>
                            </div>
                            <div className={s.purchase}>
                                <span className={s.cost}>
                                    <span className={s.int}>
                                        {card.cost}
                                    </span>
                                    <span className={s.currency}>
                                        ₽
                                    </span>
                                </span>
                                <button className={s.addToCart} onClick={addToCart}>Добавить в корзину</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}