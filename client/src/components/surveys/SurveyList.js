import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchSurveys} from '../../actions';

class SurveyList extends Component{
    componentDidMount(){
        this.props.fetchSurveys();
    }
        renderSurveys(){
        return this.props.surveys.reverse().map(survey => {
            return (
                <div 
                    className="card z-depth-0" 
                    key={survey._id}
                    style={{
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        marginBottom: '24px',
                        background: '#ffffff',
                        overflow: 'hidden'
                    }}
                >
                    <div className="card-content" style={{ padding: '24px' }}>
                        <span 
                            className="card-title blue-grey-text text-darken-4" 
                            style={{ fontWeight: '700', fontSize: '1.4rem', marginBottom: '8px' }}
                        >
                            {survey.title}
                        </span>
                        
                        <p className="grey-text text-darken-1" style={{ fontSize: '1rem', lineHeight: '1.5' }}>
                            {survey.body}
                        </p>
                        
                        <p 
                            className="grey-text text-darken-2" 
                            style={{ fontSize: '0.85rem', marginTop: '16px', fontStyle: 'italic' }}
                        >
                            <i className="material-icons left" style={{ fontSize: '14px', marginRight: '4px', marginTop: '2px' }}>date_range</i>
                            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                    </div>
                    
                    <div 
                        className="card-action" 
                        style={{ 
                            background: '#faf9f6', 
                            borderTop: '1px solid #eef0f2', 
                            padding: '12px 24px',
                            display: 'flex',
                            gap: '15px'
                        }}
                    >
                        <span 
                            className="teal-text text-darken-2" 
                            style={{ fontWeight: '600', display: 'inline-flex', alignItems: 'center', fontSize: '0.95rem' }}
                        >
                            <i className="material-icons left" style={{ fontSize: '18px', marginRight: '4px' }}>check_circle_outline</i>
                            Yes: <span className="blue-grey-text text-darken-3" style={{ marginLeft: '4px', fontWeight: '700' }}>{survey.yes}</span>
                        </span>

                        <span 
                            className="red-text text-darken-2" 
                            style={{ fontWeight: '600', display: 'inline-flex', alignItems: 'center', fontSize: '0.95rem', marginLeft: '15px' }}
                        >
                            <i className="material-icons left" style={{ fontSize: '18px', marginRight: '4px' }}>highlight_off</i>
                            No: <span className="blue-grey-text text-darken-3" style={{ marginLeft: '4px', fontWeight: '700' }}>{survey.no}</span>
                        </span>
                    </div>
                </div>
            )
        })
    }
    render(){
        return (
            <div>
                {this.renderSurveys()}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {surveys: state.surveys};
}

export default connect(mapStateToProps, {fetchSurveys})(SurveyList);