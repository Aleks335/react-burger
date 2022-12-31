import React from 'react';
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './SelectedIngredient.module.css'
import PropTypes from "prop-types";
import Ingredient from "../../burger-ingredients/ingredients-category/Ingredient/Ingredient";
import {ingredientPropTypes} from "../../data-type/DataType";

function SelectedIngredient(props) {
    const {item, isBun, type, index, deleteSelectedIngredient} = props;

    return (
        <div className={style.elements}>
            {!isBun && <DragIcon type="primary" />}
            <ConstructorElement
                index={index}
                isLocked={isBun}
                text={item.name}
                type={type}
                price={item.price}
                thumbnail={item.image}
                handleClose={()=>{
                    deleteSelectedIngredient(index)
                }
            }/>
        </div>
    );
}
SelectedIngredient.propTypes ={
    ingredientPropTypes,
    isBun : PropTypes.bool.isRequired,
    type : PropTypes.string.isRequired,
}
export default SelectedIngredient;