import React from 'react';
import Ingredient from "./Ingredient/Ingredient";
import style from "./IngredientsCategory.module.css"
import {Counter, InfoIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function IngredientsCategory(props) {
    const {ingredients, title, addSelectedIngredient, statesPopup, count} = props

    return (
        <div className={style.grid}>
            <p className={`${style.name} text text_type_main-medium`}>{title}</p>
            {
                ingredients.map((sre) => <Ingredient
                    count={count}
                    statesPopup={statesPopup}
                    addSelectedIngredient={addSelectedIngredient}
                    item={sre}
                ></Ingredient>)
            }
        </div>
    );
}

export default IngredientsCategory;