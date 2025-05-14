import Card from "../Card/Card";
import Search from "../Search/Search.jsx";
import { Cards } from "../../server__response/cards";
import s from "../Catalog/Catalog.module.scss";
import { useState } from "react";

export default function Catalog() {
    const [searchInfo, setSearchInfo] = useState("");
    function searchChange(e) {
        setSearchInfo(e.target.value);
    }
    const filteredCards = Cards.filter((props_element) => props_element.name.toLowerCase().includes(searchInfo.toLowerCase()));
    return (
        <>
            <div className={s.Catalog}>
                <div className={s.container}>
                    <h2>Доставка</h2>
                    <div className={s.filters}>
                    </div>
                    <Search searchChange={searchChange}/>
                    <div className={s.Cards}>
                        {
                            filteredCards.map((card) => {
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