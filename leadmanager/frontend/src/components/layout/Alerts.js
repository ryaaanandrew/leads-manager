import React, { Fragment, useEffect } from 'react'
import { withAlert } from 'react-alert';

const Alerts = props => {

  useEffect(() => {
    props.alert.show('It Works');
  }, []);

  return(
    <Fragment />
  );
};

export default withAlert()(Alerts);
