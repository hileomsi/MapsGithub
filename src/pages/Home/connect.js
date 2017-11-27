import { connect } from 'react-redux';
import { Modal, Coordinate, Github } from './ducks';

const mapStateToProps = ({ home }) => ({
  opened: home.get('opened') || false,
  users: home.get('users') || []
});

const mapDispatchToProps = dispatch => ({
  toogle: () => dispatch(Modal.toogle()),
  open: (event) => {
    dispatch(Modal.toogle());
    dispatch(Coordinate.set(event.nativeEvent.coordinate));
  },
  save: (name) => {
    dispatch(Modal.toogle());
    dispatch(Github.requested(name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps);
