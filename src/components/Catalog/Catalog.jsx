import Card from "../Card/Card";
import { Cards } from "../../server__response/cards";
import s from "../Catalog/Catalog.module.scss";

export default function Catalog() {
    return (
        <>
            <div className={s.Catalog}>
                <div className={s.container}>
                    <h2>Доставка</h2>
                    <div className={s.filters}>
                    </div>
                    <div className={s.search}></div>
                    <div className={s.Cards}>
                        {
                            Cards.map((card) => {
                                return (
                                    <>
                                        <Card card={card}/>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}