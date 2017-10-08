import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchUserId } from '../../actions';
import Atendee from './Atendee';

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    join: fetchUserId,
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Atendee);

