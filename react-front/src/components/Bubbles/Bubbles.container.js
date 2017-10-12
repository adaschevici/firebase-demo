import { connect } from 'react-redux';

import Bubbles from './Bubbles';

const mapStateToProps = state => ({
  users: state.common.users,
});

export default connect(
  mapStateToProps,
)(Bubbles);

