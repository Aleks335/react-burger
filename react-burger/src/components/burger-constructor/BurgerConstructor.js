import React from 'react';
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './BurgerConstructor.module.css'
import SelectedIngredient from "./selected-ingredient/SelectedIngredient";
function BurgerConstructor(props) {
    const {selectedIngredients} = props
    const firstBun = selectedIngredients.bun[0]
    const lastBun = selectedIngredients.bun[1]

    return (
        <section className={style.section}>
            <div className={style.elements}>
                {selectedIngredients.bun.length > 0 &&
                    <SelectedIngredient item={firstBun} isBun={true} type={'top'}></SelectedIngredient>}
                <div className={style.centralElements}>{selectedIngredients.main.map((item) => <SelectedIngredient item={item} isBun={false} type={undefined}></SelectedIngredient>)}</div>
                {selectedIngredients.bun.length > 1 && <SelectedIngredient item={lastBun} isBun={true} type={'bottom'}></SelectedIngredient>}
            </div>
            <div className={style.total}>
                <div className={style.price}>
                    <span className="text text_type_digits-medium mr-2">610</span><CurrencyIcon type="primary"/>
                </div>
                <Button type="primary" size="large">Оформить заказ</Button>
            </div>
        </section>
    )

}

export default BurgerConstructor;