import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import formFields from './formFields';
import {withRouter} from 'react-router-dom';
import * as actions from '../../actions';

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
        <div key={name} style={{ marginBottom: '20px' }}>
            <label className="blue-grey-text text-lighten-1" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{label}</label>
            <div className="blue-grey-text text-darken-4" style={{ fontSize: '1.1rem', fontWeight: '500', wordBreak: 'break-word', whiteSpace: 'pre-line' }}>{formValues[name] || <em className="grey-text">(Blank)</em>}</div>
        </div>
    );
});
return (
    <div>
        <h4 className="blue-grey-text text-darken-4" style={{ fontWeight: '700', marginBottom: '10px' }}>
            <i className="material-icons left amber-text text-darken-2">rate_review</i>Review Your Survey
        </h4>
        <p className="grey-text text-darken-1" style={{ marginBottom: '30px' }}>Please check your inputs carefully before launching the email campaign.</p>
        
        {/* Styled preview review block items layout */}
        <div style={{ background: '#faf9f6', padding: '20px 25px', borderRadius: '6px', border: '1px solid #eef0f2', marginBottom: '4px' }}>
            {reviewFields}
        </div>
        
        <div style={{ marginTop: '40px', overflow: 'hidden' }}>
            <button className="brown lighten-1 btn waves-effect waves-light left white-text z-depth-0" style={{ borderRadius: '4px', textTransform: 'none' }} onClick={onCancel}>
                <i className="material-icons left">edit</i>Back
            </button>
            <button className="teal btn waves-effect waves-light right white-text z-depth-0" style={{ borderRadius: '4px', textTransform: 'none', fontWeight: '600' }} onClick={() => submitSurvey(formValues, history)}>
                Send Survey
                <i className="material-icons right">send</i>
            </button>
        </div>
    </div>
); 


    // const reviewFields = _.map(formFields, ({ name, label }) => {
    //     return (
    //         <div key={name}>
    //             <label>{label}</label>
    //             <div>{formValues[name]}</div>
    //         </div>
    //     );
    // });

    // return (
    //     <div>
    //         <h5>Review Your Survey</h5>
    //         {reviewFields}
    //         <button className="yellow darken-3 btn-flat left white-text" onClick={onCancel}>
    //             Back
    //         </button>
    //         <button className="teal btn-flat right white-text" onClick={() => submitSurvey(formValues, history)}>
    //             Send Survey
    //             <i className="material-icons right">email</i>
    //         </button>
    //     </div>
    // ); 
};

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    };
}
export default connect(mapStateToProps, actions)(withRouter(SurveyReview));