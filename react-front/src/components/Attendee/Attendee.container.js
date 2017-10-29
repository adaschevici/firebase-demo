import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchUserId, userClapped } from '../../actions';
import Attendee from './Attendee';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    join: fetchUserId,
    clap: userClapped,
  }, dispatch)
);

export default connect(
  null,
  mapDispatchToProps,
)(Attendee);
