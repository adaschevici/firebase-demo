import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchUserId } from '../../actions';
import Attendee from './Attendee';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    join: fetchUserId,
  }, dispatch)
);

export default connect(
  null,
  mapDispatchToProps,
)(Attendee);
