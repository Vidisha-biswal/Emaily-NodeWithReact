import React from 'react';

const Landing = () => {
    return (
<div style={{ textAlign: 'center', padding: '80px 10px 40px 10px' }}>
    <h1 className="blue-grey-text text-darken-4" style={{ fontWeight: '800', letterSpacing: '-1px' }}>Emaily!</h1>
    <h5 className="brown-text text-lighten-1" style={{ fontWeight: '400', letterSpacing: '0.5px' }}>Collect feedback from your users effortlessly</h5>
    
    <div className="row" style={{ marginTop: '40px' }}>
        <div className="col s12 m8 offset-m2">
            <p className="flow-text grey-text text-darken-1" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
                The ultimate dashboard to create, fund, and distribute mass email campaigns. 
                Collect valuable user insights with built-in link tracking, automated feedback sorting, 
                and secure credits via Stripe integration. One coin, one campaign, zero hassle.
            </p>
        </div>
    </div>
    
    <div style={{ marginTop: '40px' }}>
        <a href="/auth/google" className="waves-effect waves-light btn-large blue-grey darken-4 white-text z-depth-1" style={{ borderRadius: '6px', textTransform: 'none', fontWeight: '600', padding: '0 35px' }}>
            <i className="material-icons left yellow-text text-darken-2">flash_on</i>Get Started Here
        </a>
    </div>
</div>

    );
};

export default Landing;
