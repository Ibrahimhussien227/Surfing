import React from "react";
import ICONS from "../../icon/icons";
import s from "./style.module.scss";

const Footer = () => {
  return (
    <div className={s.footerContainer}>
      <img className={s.logoName} src={ICONS.logoNameWhite} alt="LogoName" />
      <div className={s.langContainer}>
        <p className={s.langText}>RU</p>
        <img
          className={s.dropdownIcon}
          src={ICONS.WhiteDropdown}
          alt="Dropdown"
        />
      </div>
      <div className={s.containerSocial}>
        <img className={s.instaIcon} src={ICONS.insta} alt="Instagram" />
        <img className={s.telegIcon} src={ICONS.telegram} alt="Telegram" />
        <img className={s.vkIcon} src={ICONS.vk} alt="Vk" />
        <img className={s.fbIcon} src={ICONS.fb} alt="Facebook" />
      </div>
      <p className={s.text}>Напишите нам</p>
      <div className={s.communityContainer}>
        <p className={s.communityText}>Сообщество</p>
        <p className={s.communityPoints}>
          {" "}
          Блог Видео Эксперты Амбассадоры Курсы Клубы Журнал
        </p>
      </div>
      <div className={s.aboutContainer}>
        <div className={s.aboutText}>О проекте</div>
      </div>
      <div className={s.breakPoint} />
      <p className={s.text1}>© GoodSurfing, 2017-2021</p>
    </div>
  );
};

export default Footer;
