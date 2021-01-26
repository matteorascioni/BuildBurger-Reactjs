import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import './CheckoutSummary.css'; 

const checkoutSummary = (props) => {
    return( 
        <div className="CheckoutSummaryContainer"> 
            <div className="CheckoutSummary">
                <h1 style={{textAlign: 'center'}}>We hope it tastes well!</h1>
                <div style={{width: '80%',}}>
                    <Burger ingredients={props.ingredients}/>
                </div>
                <div className="CheckoutSummaryButtons">
                    <Button 
                        btnType="Danger"
                        clicked={props.checkoutCancelled}
                    >
                        CANCEL
                    </Button>
                    <Button 
                        btnType="Success"
                        clicked={props.checkoutContinue}
                    >
                        CONTINUE
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default checkoutSummary;