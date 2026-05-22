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
            <div key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        );
    });

    return (
        <div>
            <h5>Review Your Survey</h5>
            {reviewFields}
            <button className="yellow darken-3 btn-flat left white-text" onClick={onCancel}>
                Back
            </button>
            <button className="teal btn-flat right white-text" onClick={() => submitSurvey(formValues, history)}>
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    ); 
};

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    };
}
export default connect(mapStateToProps, actions)(withRouter(SurveyReview));