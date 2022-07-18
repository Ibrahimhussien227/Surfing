import React from "react";
import ICONS from "../../icon/icons";
import s from "./style.module.scss";
import Select from "react-select";

const Nav = ({ selectedOption, setSelectedOption, items }) => {
  const handleChange = (selectedOptions) => {
    setSelectedOption(selectedOptions.value);
  };

  return (
    <div className={s.navContainer}>
      <img className={s.logo} src={ICONS.logo} alt="Logo" />
      <img className={s.logoIcon} src={ICONS.logoName} alt="LogoName" />
      <div>
        {" "}
        <Select
          className={s.languageSelect}
          options={items}
          onChange={handleChange}
          defaultValue={items[0]}
          value={selectedOption.value}
        />
      </div>
      <div className={s.containerSearch}>
        <p className={s.searchText}>Все предложения</p>
        <i>
          <img className={s.circleSearch} src={ICONS.Oval} alt="Oval" />
          <img className={s.lineSearch} src={ICONS.Line} alt="Line" />
        </i>
      </div>
      <div>
        <p className={s.community}>Сообщество</p>
        <img
          className={s.communityDropdown}
          src={ICONS.BlueDropdown}
          alt="Dropdown"
        />
      </div>
      <div>
        <p className={s.projectText}>О проекте</p>
        <img
          className={s.projectDropdown}
          src={ICONS.BlueDropdown}
          alt="Dropdown"
        />{" "}
      </div>
      <p className={s.signin}>Вход</p>
      <div to="/" className={s.registerContainer}>
        <p className={s.registerText}>Регистрация</p>
      </div>
    </div>
  );
};

export default Nav;
