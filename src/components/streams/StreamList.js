import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (
      stream.userId === this.props.currentUserId &&
      !!this.props.currentUserId
    ) {
      return (
        <div className="float-right">
          <div className="row">
            <div className="col-md-2 d-sm-none" />
            <div className="col-md-5">
              <button className="btn btn-primary float-right">Edit</button>
            </div>
            <div className="col-md-5">
              <button className="btn btn-danger float-right">Delete</button>
            </div>
          </div>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <li className="media p-3 border-bottom" key={stream.id}>
          <div className="container">
            <div className="row">
              <div className="col-3 col-lg-2">
                <img
                  src="https://via.placeholder.com/64"
                  className="mr-3 d-md-none d-xs-block"
                  alt="stream thumbnail"
                />
                <img
                  src="https://via.placeholder.com/128"
                  className="mr-3 d-none d-md-block d-lg-block"
                  alt="stream thumbnail"
                />
              </div>

              <div className="col-5 col-lg-7">
                <div className="media-body">
                  <h5 className="mt-0">{stream.title}</h5>
                  <div className="description text-muted">
                    {stream.description}
                  </div>
                </div>
              </div>
              <div className="col-4 col-lg-3">{this.renderAdmin(stream)}</div>
            </div>
          </div>
        </li>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div>
          <Link
            to="/streams/new"
            className="btn btn-outline-primary btn-lg btn-block"
          >
            + Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="row mb-5">
          <div className="col">
            <h2>Streams</h2>
          </div>
          <div className="col">{this.renderCreate()}</div>
        </div>

        <ul className="list-unstyled">{this.renderList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
