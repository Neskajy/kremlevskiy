import s from "./Card.module.scss";
import { cartContext } from "../../contexts/context";
import { useContext } from "react";

export default function Card({card}) {
    const {cart, setCart} = useContext(cartContext);
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
            <div className={s.Card} key={card.id}>
                <div className={s.img}>
                    <img src={card.img} alt="" />
                </div>
                <div className={s.container}>
                    <div className={s.name}>
                        { card.name.length > 21 ? card.name.slice(0,21) + "..." : card.name}
                    </div>
                    <div className={s.composition}>
                        { card.composition.length > 30 ? card.composition.slice(0,30) + "..." : card.composition }
                    </div>
                    <div className={s.money}>
                        <div className={s.cost}>
                            <div className={s.int}>
                                { card.cost }
                            </div>
                            <div className={s.prefix}>
                                ₽
                            </div>
                        </div>
                        <button className={s.btnAddToBasket} onClick={() => { addToCart(card) }}>
                            Добавить в корзину
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}