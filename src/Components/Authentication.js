import React from "react";
import { connect } from "react-redux";

import { firebase } from "../../firebase/index";
import { loadProfile } from "../../actions/userActions";

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      const { onSetAuthUser, onSetUserProps } = this.props;

      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? onSetAuthUser(authUser) && loadProfile(authUser.uid)
          : onSetAuthUser(null) && onSetUserProps({});
      });
    }

    render() {
      return <Component />;
    }
  }

  const mapDispatchToProps = dispatch => ({
    onSetAuthUser: authUser => dispatch({ type: "AUTH_USER_SET", authUser }),
    onSetUserProps: () => dispatch({ type: "REMOVE_CURRENT_USER_PROPS" })
  });
  return connect(
    null,
    mapDispatchToProps
  )(WithAuthentication);
};

export default withAuthentication;
