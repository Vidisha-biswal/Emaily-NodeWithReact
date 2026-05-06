import React, {Component, component} from 'react';
class Header extends Component{
    render(){
        return (
            <nav>
                <div className='nav-wrapper'>
                    <a className='left brand-logo' href='localhost:3000/surveys'>
                        Emaily
                    </a>
                    <ul className='right'>
                        <li>
                            <a href="www.google.com">Login with Google</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Header;