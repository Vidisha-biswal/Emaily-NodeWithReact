//form for user input
import _ from 'lodash';
import React, {Component} from 'react';
import { reduxForm ,Field } from 'redux-form';
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom';
import validateEmail from '../../utils/validateEmail';
import FIELDS from './formFields';

class SurveyForm extends Component{
    renderFields()  {
        return _.map(FIELDS, ({label,name}) => {
            return (
                <Field key={name} component={SurveyField} type="text" label={label} name={name}/>
            );
        });
    } 
render(){
    return (
        <div>
            <h4 className="blue-grey-text text-darken-4" style={{ fontWeight: '700', marginBottom: '30px' }}>
                <i className="material-icons left teal-text">create_new_folder</i>Create New Survey
            </h4>
            
            <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                {this.renderFields()}
                
                <div style={{ marginTop: '40px', overflow: 'hidden' }}>
                    <Link to="/surveys" className="brown lighten-1 btn waves-effect waves-light left white-text z-depth-0" style={{ borderRadius: '4px', textTransform: 'none' }}>
                        <i className="material-icons left">arrow_back</i>Cancel
                    </Link>
                    <button type="submit" className="teal btn waves-effect waves-light right white-text z-depth-0" style={{ borderRadius: '4px', textTransform: 'none' }}>
                        Next
                        <i className="material-icons right">arrow_forward</i>
                    </button>
                </div>
            </form>
        </div>
    );
};
  
}
function validate(values){
    const errors = {};
    errors.recipients = validateEmail(values.recipients || '');
    _.each(FIELDS, ({name}) => {
        if(!values[name]){
            errors[name] = 'You must provide a value';
        }   
    });

    return errors;
}
export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);