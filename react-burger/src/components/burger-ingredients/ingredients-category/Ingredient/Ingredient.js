import React from 'react';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './Ingredient.module.css'
import PropTypes from "prop-types";
import {ingredientPropTypes} from "../../../data-type/DataType";

function Ingredient(props) {
    const {image, price, name} = props.item

    return (
        <div className={style.ingredient}
             onClick={(() => {
                 props.addSelectedIngredient(props.item);
             })}>

            <img src={image} className={style.img}/>
            <div className={style.price}>
                <span className="text text_type_digits-default mr-1">{price}</span>
                <CurrencyIcon type="primary"/>
            </div>
            <span className="text text_type_main-default">{name}</span>
        </div>
    );
}
Ingredient.propTypes ={
    addSelectedIngredient: PropTypes.func.isRequired,
    ingredientPropTypes
}
export default Ingredient;