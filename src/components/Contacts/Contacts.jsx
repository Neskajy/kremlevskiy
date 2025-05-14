import inst from "../../assets/vectors/social/inst.svg";
import f from "../../assets/vectors/social/f.svg";
import tg from "../../assets/vectors/social/tg.svg";
import yt from "../../assets/vectors/social/yt.svg";
import mail from "../../assets/vectors/icons_contacts/mail.svg";
import location from "../../assets/vectors/icons_contacts/location.svg";
import phone from "../../assets/vectors/icons_contacts/phone.svg";

import s from "./Contacts.module.scss";


export default function Contacts() {
    return (
        <>
            <div className={s.Contacts}>
                <div className={s.container}>
                    <h2>Свяжитесь с нами</h2>
                    <div className={s.description}>
                        Мы объединеяем лидеров вокруг общей цели и стратегической истории, которые побуждают их бизнес и бренд к действиям.
                    </div>
                    <div className={s.block}>
                        <div className={s.left__grid}>
                            <div className={s.hz}>
                                <div className={s.icon}>
                                    <img src={location} alt="" />
                                </div>
                                <h4>Адрес:</h4>
                                <div className={s.info}>
                                    ул. Моховая, 15с1, Москва, 125009
                                </div>
                            </div>
                            <div className={s.hz}>
                                <div className={s.icon}>
                                    <img src={phone} alt="" />
                                </div>
                                <h4>Позвоните нам:</h4>
                                <div className={s.info}>
                                    1(234)567-890 <br />
                                    1(234)567-890
                                </div>
                            </div>
                            <div className={s.hz}>
                                <div className={s.icon}>
                                    <img src={mail} alt="" />
                                </div>
                                <h4>Почта:</h4>
                                <div className={s.info}>
                                    Kremlevskiy@mail.ru <br />
                                    Nikolay@mail.ru
                                </div>
                            </div>
                            <div className={s.hz}>
                                <div className={`${s.icon} ${s.text}`}>Свяжитесь с нами</div>
                                <div className={s.info}>
                                    Свяжитесь с нами для получения предложения.
                                </div>
                                <div className={s.social__medias}>
                                    <img src={yt} alt="" />
                                    <img src={f} alt="" />
                                    <img src={tg} alt="" />
                                    <img src={inst} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={s.map}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.118422160461!2d37.613258626441116!3d55.756445016892165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5aafc97525%3A0xe1efac947d4ea4dc!2z0JPRgNCw0L3QtCDQmtCw0YTQtSBEci4g0JbQuNCy0LDQs9C-!5e0!3m2!1sru!2sru!4v1746990783838!5m2!1sru!2sru" width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}