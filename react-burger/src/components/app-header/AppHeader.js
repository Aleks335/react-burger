import React from 'react';
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from '../app-header/AppHeader.module.css'

function AppHeader(props) {
    return (
        <header className={style.header}>
            <div className={style.content}>
                <nav className="mt-4 mb-4">
                    <ul className={style.menu}>
                        <li>
                            <a href="#" className={`${style.link} pr-5 pl-5 mr-2`}>
                                <BurgerIcon type="primary"/>
                                <p className={`${style.linkItem} ml-2 text text_type_main-default`}>Конструктор</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className={`${style.link} pr-5 pl-5`}>
                                <ListIcon type="secondary"/>
                                <p className={`${style.linkItem} ml-2 text text_type_main-default text_color_inactive`}>Лента
                                    заказов</p>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className={style.logo}>
                    <Logo/>
                </div>
                <div>

                    <nav className="mt-4 mb-4">
                        <a href="#" className={`${style.link} pr-5 pl-5`}>
                            <ProfileIcon type="secondary"/>
                            <p className={`${style.linkItem} ml-2 text text_type_main-default text_color_inactive`}>Личный
                                кабинет</p>
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;