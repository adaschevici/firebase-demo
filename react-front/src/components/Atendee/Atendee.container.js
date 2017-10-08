import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { userJoined } from '../../actions';
import Atendee from './Atendee';

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    join: userJoined,
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Atendee);

