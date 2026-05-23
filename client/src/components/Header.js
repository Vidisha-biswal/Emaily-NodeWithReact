import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import Payments from './Payments';

class Header extends Component{
    renderContent(){
        switch(this.props.auth)
        {
            case null:
                return ;
            case false:
                return (
                    <li><a href="/auth/google">Login with Google</a></li>
                );
            default:
                return [
                    <li key="1"><Payments /></li>,
                    <li key='3' style={{margin:'0 15px'}}>
                        <span className="new badge grey lighten-2 black-text font-weight-bold" data-badge-caption="" style={{ padding: '0 12px', borderRadius: '4px', fontSize: '17px', verticalAlign: 'middle' }}>
                            💳 Credits: {this.props.auth.credits}
                        </span>
                    </li>,
                    <li key="2"><a href='/api/logout' className="grey-text text-lighten-2"><i className="material-icons right">exit_to_app</i>Logout</a></li>
                ];
        }
    }
    render(){
        return (
            <nav className="blue-grey darken-4 z-depth-1" style={{ padding: '0 20px' }}>
                <div className='nav-wrapper'>
                    <Link 
                        to='/'
                        className='left brand-logo  white-text font-weight-bold'
                        style={{ letterSpacing: '-0.5px' }}>
                        <i className="material-icons left hide-on-small-only">mail_outline</i>
                        Emaily
                    </Link>
                    <ul className='right'>
                        {this.renderContent()}
                    </ul> 
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth })
{
    return { auth };
}
export default connect(mapStateToProps)(Header);