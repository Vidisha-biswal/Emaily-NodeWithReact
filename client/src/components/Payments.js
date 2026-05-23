import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component{
    render(){
        return (
            <StripeCheckout 
                name="Emaily"
                description='$5 for for 5 email credits'
                amount={500}
                token={token=> this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY} 
            >
                {/* <button className='btn-flat waves-effect waves-light brown lighten-1 white-text z-depth-0' style={{ borderRadius: '20px', textTransform: 'none', fontWeight: '500' }}> */}
                <button 
                    className='btn waves-effect waves-light grey lighten-1 black-text z-depth-0' 
                    style={{ 
                        borderRadius: '20px', 
                        textTransform: 'none', 
                        fontWeight: '500',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '36px',
                        lineHeight: 'normal'
                    }}
                >
                <i className="material-icons left">add_circle_outline</i>
                   Add Credits
                </button>
            </StripeCheckout>
        );
    }
}

export default connect(null,actions)(Payments);