import React, {Component, component} from 'react';
import {connect} from 'react-redux';

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
                return (
                    <li><a href='/api/logout'>Logout</a></li>
                );
        }
    }
    render(){
        console.log("props"+this.props);
        return (
            <nav>
                <div className='nav-wrapper'>
                    <a className='left brand-logo' href='localhost:3000/surveys'>
                        Emaily
                    </a>
                    <ul className='right'>
                        {this.renderContent()}
                        {/*<li>
                            <a href="www.google.com">Login with Google</a>
                        </li>*/}
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