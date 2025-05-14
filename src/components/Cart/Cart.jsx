import { useContext } from "react"
import { cartContext } from "../../contexts/context";
import s from "./Cart.module.scss";
import CardForCart from "../CardForCart/CardForCart";

export default function Cart() {
    const {cart, setCart} = useContext(cartContext);
    console.log(cart);
    return (
        <>
            {
                cart.length == 0 ? (
                    <div className={s.message}>
                        <h2>Корзина пуста</h2>
                    </div>
                ) :
                (
                    <div className={s.Cart}>
                        <div className={s.container}>
                            {
                                cart.map((card) => {
                                    return <CardForCart card={card}/>
                                })
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}