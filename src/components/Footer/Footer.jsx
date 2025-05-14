import inst from "../../assets/vectors/social__white/inst.svg";
import f from "../../assets/vectors/social__white/f.svg";
import tg from "../../assets/vectors/social__white/tg.svg";
import yt from "../../assets/vectors/social__white/yt.svg";
import mail from "../../assets/vectors/icons_contacts/mail.svg";
import location from "../../assets/vectors/icons_contacts/location.svg";
import phone from "../../assets/vectors/icons_contacts/phone.svg";
import s from "./Footer.module.scss";

export default function Footer() {
    return (
        <>
            <div className={s.Footer}>
                <div className={s.container}>
                    <h2>
                        Кремлевский ресторан
                    </h2>
                    <div className={s.description}>
                        Кремлевский ресторан не существует, фото взяты у ресторана dr живаго 
                    </div>
                    <div className={s.social__medias}>
                        <img src={yt} alt="" />
                        <img src={f} alt="" />
                        <img src={tg} alt="" />
                        <img src={inst} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}