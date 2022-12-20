import React from 'react';
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './SelectedIngredient.module.css'

function SelectedIngredient(props) {
    const {item, isBun, type} = props;
    return (
        <div className={style.elements}>
            {!isBun && <DragIcon type="primary"/>}
            <ConstructorElement isLocked={isBun} text={item.name} type={type} price={item.price} thumbnail={item.image}/>
        </div>

    );
}
export default SelectedIngredient;