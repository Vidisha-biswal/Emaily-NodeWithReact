//Survey field contains logic to render a single label and text input
import React, {Component} from 'react';
import { reduxForm ,Field } from 'redux-form';

export default ({input,label,meta:{error,touched}}) => {
    return (    
        <div>
            <label>{label}</label>
            <input {...input} style={{marginBottom:'5px'}}/>
            {error && touched && <span className="red-text" style={{marginBottom:'20px'}}>{error}</span>}
        </div>
    );
}   