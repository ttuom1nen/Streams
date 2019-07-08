import React from "react";
import { connect } from "react-redux";
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
      return <div>Edit / Delete</div>;
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <li className="media p-3 border-bottom" key={stream.id}>
          <img
            src="https://via.placeholder.com/64"
            className="mr-3"
            alt="stream thumbnail"
          />

          <div className="media-body">
            <h5 className="mt-0">{stream.title}</h5>
            <div className="description text-muted">{stream.description}</div>
          </div>
          {this.renderAdmin(stream)}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <ul className="list-unstyled">{this.renderList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
