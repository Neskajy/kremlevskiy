import search__icon from "../../assets/vectors/search__icon.svg";
import s from "./Search.module.scss";

export default function Search({searchChange}) {
    return (
        <>
            <div className={s.Search}>
                <input 
                    type="text" 
                    className={s.text}
                    placeholder="Поиск"
                    onChange={searchChange}
                />
                <img src={search__icon} alt="" />
            </div>
        </>
    )
}