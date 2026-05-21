import React from 'react';
import { Link } from 'react-router-dom';

const SurveyReview = ({ onCancel }) => {
    return (
        <div>
            <h3>Review Your Survey</h3>
            <p>This is a simple review component for the survey form.</p>
            <button className="blue btn-flat left white-text" onClick={onCancel}>
                Back
            </button>
            <Link to="/surveys" className="teal btn-flat right white-text">
                Send Survey
                <i className="material-icons right">email</i>
            </Link>
        </div>
    );
};
export default SurveyReview;