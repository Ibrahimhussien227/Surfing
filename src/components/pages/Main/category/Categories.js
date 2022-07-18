import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesAction } from "../../../../store/actions/categories.action";
import s from "./style.module.scss";

const Categories = ({ selectedOption }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(fetchCategoriesAction());
  }, [dispatch]);

  const soretedCategories = categories
    .map((a) => ({
      id: a.id,
      name_ru: a.name_ru,
      image: a.image,
      name_en: a.name_en,
      name_es: a.name_es,
    }))
    .sort((el1, el2) => el1.id - el2.id);

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const categoriesMap = () => {
    return soretedCategories.map((category) => {
      const logo = require(`.${
        category.image ? category.image : "/images/category(11).png"
      }`);
      return (
        <div key={category.id} className={s.itemContainer}>
          <p className={s.text}>
            {(() => {
              switch (selectedOption) {
                case "RU":
                  return category.name_ru;
                case "EN":
                  return category.name_en;
                case "ES":
                  return category.name_es;
                default:
                  return category.name_ru;
              }
            })()}

            <br />
          </p>
          <p className={s.offer}>{randomInteger(1, 30)} предложения</p>

          <img className={s.cover} src={logo} alt="Cover" />
        </div>
      );
    });
  };

  return <div className={s.categoryContainer}>{categoriesMap()}</div>;
};

export default Categories;
