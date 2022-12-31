import React from 'react';
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './Ingredient.module.css'
import PropTypes from "prop-types";
import {ingredientPropTypes} from "../../../data-type/DataType";
import IngredientDetails from "../../../ingredient-details/IngredientDetails";

function  Ingredient(props) {
    const {image, price, name , count} = props.item

    return (
        <div>
            <div className={style.info}>
                <p className={style.circle} onClick={(()=>{
                    props.statesPopup('ingredient', true, props.item)
                })}>!</p>
                {count > 0 && <Counter count={count} extraClass={style.count}/>}
            </div>
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
        </div>
    );
}
Ingredient.propTypes ={
    addSelectedIngredient: PropTypes.func.isRequired,
    ingredientPropTypes
}
export default Ingredient;