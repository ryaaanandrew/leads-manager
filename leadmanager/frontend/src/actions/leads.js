import axios from 'axios';
import { GET_LEADS, DELETE_LEAD, CREATE_LEAD, GET_ERRORS } from './types';
import { createMessage, returnErrors} from './messages';

export const getLeads = () => dispatch => {
  axios.get('/api/leads/')
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    }).catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
    });
};

export const createLead = (lead) => dispatch => {
  axios.post('/api/leads/', lead)
    .then(res => {
      dispatch(createMessage({ createLead: 'Lead created' }));
      dispatch({
        type: CREATE_LEAD,
        payload: res.data
      });
    }).catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const deleteLead = (id) => dispatch => {
  axios.delete(`/api/leads/${id}`)
    .then(res => {
      dispatch(createMessage({ deleteLead: 'Lead deleted' }));
      dispatch({
        type: DELETE_LEAD,
        payload: id
      });
    }).catch(err => console.log(err));
};

