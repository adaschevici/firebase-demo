import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchUserId } from '../../actions';
import Atendee from './Atendee';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    join: fetchUserId,
  }, dispatch)
);

export default connect(
  null,
  mapDispatchToProps,
)(Atendee);

