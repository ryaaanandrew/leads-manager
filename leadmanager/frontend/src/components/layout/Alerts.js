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
    if(error.msg.name) alert.error('Name is required');
    if(error.msg.email) alert.error('Email is required');
  }, [props.error]);

  return(
    <Fragment />
  );
};

const mapStateToProps = state => {
  return({
    error: state.errors
  });
};

export default connect(mapStateToProps, null)(withAlert()(Alerts));
