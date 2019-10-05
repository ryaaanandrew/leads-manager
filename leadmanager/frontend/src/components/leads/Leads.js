import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../actions/leads';



const Leads = props => {
  Leads.propTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired
  };

  useEffect(() => {
    props.getLeads();
  }, [])

  return(
    <>
      <h1>leads</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th/>
          </tr>
        </thead>
        <tbody>
          {props.leads && props.leads.map(lead => (
            <tr key={lead.id}>
              <td>{lead.id}</td>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.message}</td>
              <td><button className='btn btn-danger btn-sm' onClick={() => props.deleteLead(lead.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>

  );
};

const mapStateToProps = state => {
  return {
    leads: state.leads.leads
  };
}

export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);
