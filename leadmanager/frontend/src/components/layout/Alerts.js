import React, { Fragment, useEffect } from 'react'
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Alerts = props => {
  Alerts.propTypes = {
    error: PropTypes.object.isRequired
  };

  useEffect(() => {
    const { error, alert } = props;
    
    if(error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
    if(error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
    if(error.msg.message) alert.error(`Email: ${error.msg.message.join()}`);
  }, [props.error]);

  useEffect(() => {
    const { alert, message } = props;
    
    if(message.deleteLead) alert.success(message.deleteLead); 
    if(message.createLead) alert.success(message.createLead); 
  }, [props.message]);

  return(
    <Fragment />
  );
};

const mapStateToProps = state => {
  return({
    error: state.errors,
    message: state.messages
  });
};

export default connect(mapStateToProps, null)(withAlert()(Alerts));
