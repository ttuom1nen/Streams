import React, { Component } from "react";

export default class GoogleAuth extends Component {
  componentDidMount() {
    // Initialize the Google gapi library:
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "856831203022-atvrdum5jqdnkvci38teqami11ka6cth.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}
