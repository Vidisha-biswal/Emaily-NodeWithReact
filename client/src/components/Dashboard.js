import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard=() =>{
    return (
        <div style={{ padding: '30px 10px' }}>
    <h4 className="blue-grey-text text-darken-3" style={{ fontWeight: '600', marginBottom: '20px' }}>
        <i className="material-icons left">dashboard</i>My Surveys
    </h4>
    <SurveyList />
    <div className='fixed-action-btn'>
        <Link to="/surveys/new" className='btn-floating btn-large grey darken-1 waves-effect waves-light z-depth-2'>
            <i className='material-icons black-text'>add</i>
        </Link>
    </div>
</div>
    );
};
export default Dashboard;