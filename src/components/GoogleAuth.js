import React, { Component } from "react";

export default class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    // Initialize the Google gapi library:
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "856831203022-atvrdum5jqdnkvci38teqami11ka6cth.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOut} className="btn btn-danger">
          Log out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignIn} className="btn btn-primary">
          Sign in with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
