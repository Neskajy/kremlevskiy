import { useContext, useEffect, useState } from "react"
import { cartContext } from "../../contexts/context";
import s from "./Cart.module.scss";
import CardForCart from "../CardForCart/CardForCart";

export default function Cart() {
    const {cart, setCart} = useContext(cartContext);
    const [totalCount, setTotalCount] = useState(0);
    const [totalAmmount, setTotalAmmount] = useState(0);


    function calculateAmount() {
        let totalAmmou = 0;
        for (let i = 0; i < cart.length; i++) {
            totalAmmou += cart[i].cost * cart[i].count;
        }
        setTotalAmmount(totalAmmou);
    }
    function calculateCount() {
        let totalCou = 0;
        for (let i = 0; i < cart.length; i++) {
            totalCou += cart[i].count;
        }
        setTotalCount(totalCou);
    }

    useEffect(() => {
        calculateAmount();
        calculateCount();
    }, []);

    return (
        <>
            {
                cart.length == 0 ? (
                    <div className={s.Cart}>
                        <div className={`${s.container} ${s.empty}`}>
                            <h2>Корзина пуста</h2>
                        </div>
                    </div>
                ) :
                (
                    <div className={s.Cart}>
                        <div className={s.container}>
                            <div className={s.cards}>
                                {
                                    cart.map((card) => {
                                        return <CardForCart card={card}/>
                                    })
                                }
                            </div>
                            <div className={s.products__status}>
                                <h4>Сформировать заказ?</h4>
                                <div className={s.stat}>
                                    <div className={`${s.stat__item} amount`}>
                                        <span>Кол-во товаров:</span>
                                        <div className={s.count}>
                                            <div className={s.int}>{totalCount}</div>
                                            <div className={s.prefix}>шт</div>
                                        </div>
                                    </div>
                                    <div className={`${s.stat__item} money`}>
                                        <span>Сумма к оплате:</span>
                                        <div className={s.count}>
                                            <div className={s.int}>{totalAmmount}</div>
                                            <div className={s.prefix}>₽</div>
                                        </div>
                                    </div>
                                </div>
                                <button className={s.order}>
                                    Заказать
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}