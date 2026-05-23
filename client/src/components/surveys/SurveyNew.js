//it shows SurveyForm and SurveyFormReview
import React, {Component} from 'react';
import {reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyReview from './SurveyFormReview';

class SurveyNew extends Component{
    state={showFormReview: false};

    renderContent(){
        if(this.state.showFormReview){
            return <SurveyReview 
            onCancel={() => this.setState({showFormReview: false})} />;
        }
        return <SurveyForm onSurveySubmit={() => this.setState({showFormReview: true})} />;
    }
    // Suggested layout wrappers inside your SurveyNew render method:
render(){
     return (
         <div className="container" style={{ marginTop: '40px', marginBottom: '40px' }}>
             <div className="card z-depth-0" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '30px' }}>
                 {this.renderContent()}
             </div>
         </div>
     );
};

//     render(){
//          return (
//      <div>
//      {this.renderContent()}
//  </div>
//  );
//  };
}
 export default reduxForm({
    form: 'surveyForm'
 })(SurveyNew);