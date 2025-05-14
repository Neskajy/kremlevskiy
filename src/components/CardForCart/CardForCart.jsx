import s from "./CardForCart.module.scss";
import { cartContext } from "../../contexts/context";
import { useContext } from "react";

export default function CardForCart({card}) {

    const {cart, setCart} = useContext(cartContext);

    function countIncrement() {
        setCart(cart.map((cart_element) => 
            cart_element.id === card.id
                ? {...cart_element, count: cart_element.count + 1}
                : cart_element
        ));
    }

    function decrementElement() {
        setCart(cart.map((cart_element) => 
            cart_element.id === card.id
            ? cart_element.count > 1 ? {...cart_element, count: cart_element.count - 1} : cart_element
            : cart_element
        ));
    }

    function deleteElement() {
        setCart(cart.filter((cart_element) =>
            cart_element.id !== card.id
        ))
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
                            <div className={s.minus} onClick={decrementElement}>-</div>
                            <div className={s.status}>
                                <div className={s.count}>
                                    {card.count}
                                </div>
                                <div className={s.prefix}>
                                    шт
                                </div>
                            </div>
                            <div className={s.plus} onClick={countIncrement}>+</div>
                        </div>
                        <button className={s.btnDelete} onClick={deleteElement}>
                            Удалить
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}