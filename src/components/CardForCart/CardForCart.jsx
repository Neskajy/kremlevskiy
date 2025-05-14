import s from "./CardForCart.module.scss";
import { cartContext } from "../../contexts/context";

export default function CardForCart({card}) {

    const {cart, setCart} = useContext(cartContext);

    function countIncrement() {
        const newCard = [...card];
        newCard.count += 1;

        const newCart = [...cart];
        newCart.remove(card);
        newCart.push(newCard);
    }

    return (
        <>
            <div className={s.card}>
                <img src={card.img} alt="" />
                <div className={s.info}>
                    <div className={s.left__info}>
                        <p>{card.name}</p>
                        <div className={s.cost}>
                            <div className={s.int}>{card.cost}</div>
                            <div className={s.currency}>₽</div>
                        </div>
                    </div>
                    <div className={s.right__info}>
                        <div className={s.count}>
                            <div className={s.minus}>-</div>
                            <div className={s.status}>
                                <div className={s.count}>
                                    {card.count}
                                </div>
                                <div className={s.prefix}>
                                    шт
                                </div>
                            </div>
                            <div className={s.plus}>+</div>
                        </div>
                        <button className={s.btnDelete}>
                            Удалить
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}