import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationsItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = ( props ) => {
    let attachedClasses = ["SideDrawer", "Close"];
    if (props.open === true) {
        attachedClasses = ["SideDrawer", "Open"];
    }

    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
                <div className={attachedClasses.join(' ')}>
                        <Logo heihgt="11%"/>
                    <nav>
                        <NavigationItems  />
                    </nav>
                </div>
        </Aux>

    );
};

export default sideDrawer;