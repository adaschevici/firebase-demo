import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { userClapped } from '../../actions';
import Clap from './Clap';

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    clap: userClapped,
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Clap);
