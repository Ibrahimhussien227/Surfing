import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Categories from "./category/Categories";
import Footer from "./footer/Footer";
import Nav from "./nav/Nav";
import s from "./style.module.scss";

const items = [
  { label: "RU", value: "RU" },
  { label: "EN", value: "EN" },
  { label: "ES", value: "ES" },
];

const MyWrapperComponent = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  const textStyle = isMobile ? "text-mobile" : "text-mobile";

  return <div className={textStyle}>{props.children}</div>;
};

const Main = () => {
  const [selectedOption, setSelectedOption] = useState(items[0].label);

  return (
    <MyWrapperComponent>
      <div className={s.containerCenter}>
        <div className={s.container}>
          <div className={s.header}>
            <Nav
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              items={items}
            />
          </div>
          <div className={s.categoryContainer}>
            <h1 className={s.textLabel}>Выбирайте по интерес</h1>
            <Categories selectedOption={selectedOption} />
          </div>
          <div className={s.footerContainer}>
            <Footer />
          </div>
        </div>
      </div>
    </MyWrapperComponent>
  );
};

export default Main;
