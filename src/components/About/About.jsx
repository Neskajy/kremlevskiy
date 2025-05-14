import s from "./About.module.scss";
import Slider from "../Slider/Slider";

export default function About() {
    return (
        <>
            <div className={s.About}>
                <div className={s.container}>
                    <h2>О нас</h2>
                    <div className={s.description}>
                        Ресторан «Кремлёвский» — изысканная кухня в историческом центре Москвы. Уютная атмосфера, блюда от шеф-повара и вид на Кремль создают особую атмосферу праздника.
                    </div>
                    <div className={s.for_slider}>
                        <Slider />
                    </div>
                </div>
            </div>
        </>
    )
}