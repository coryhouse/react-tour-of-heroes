// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HeroApp from '../components/HeroApp';
import * as HeroActions from '../actions/heroActions';

class App extends React.Component {
  render() {
    const { heroAppState, actions } = this.props;

    return (
        <HeroApp heroAppState={heroAppState} actions={actions} />
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  heroAppState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    heroAppState: state.heroAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(HeroActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
