import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { listenHubData } from '../../actions';
import Hub from './Hub';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    listenData: listenHubData,
  }, dispatch)
);

export default connect(
  null,
  mapDispatchToProps,
)(Hub);
