//Survey field contains logic to render a single label and text input
import React, {Component} from 'react';
import { reduxForm ,Field } from 'redux-form';

export default ({input,label,meta:{error,touched}}) => {
    return (  
        <div style={{ marginBottom: '25px' }}>
            <label className="blue-grey-text text-darken-1" style={{ fontSize: '0.95rem', fontWeight: '500' }}>{label}</label>
            <input 
                {...input} 
                style={{ 
                    marginBottom: '6px', 
                    borderBottom: touched && error ? '1px solid #f44336' : '1px solid #9e9e9e',
                    boxShadow: 'none'
                }}
            />
            {/* Using pre-line supports vertical line breaks for bad emails */}
            {error && touched && (
                <div className="red-text text-darken-1" style={{ fontSize: '0.85rem', fontWeight: '500', whiteSpace: 'pre-line', marginTop: '2px' }}>
                    <i className="material-icons left" style={{ fontSize: '14px', marginRight: '4px', marginTop: '2px' }}>error_outline</i>
                    {error}
                </div>
            )}
        </div>  
        // <div>
        //     <label>{label}</label>
        //     <input {...input} style={{marginBottom:'5px'}}/>
        //     {error && touched && <span className="red-text" style={{marginBottom:'20px'}}>{error}</span>}
        // </div>
    );
}   