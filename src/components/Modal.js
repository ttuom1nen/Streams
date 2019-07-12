import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  return ReactDOM.createPortal(
    <div
      className="modal"
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "block",
        opacity: 1
      }}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

/*
class Modal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="modal modal-fixed-footer" style={{ display: "block" }}>
        <div className="modal-content">{this.props.children}</div>
        <div className="modal-footer">
          <button
            onClick={this.props.onClose}
            className="modal-close waves-effect waves-green btn-flat"
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}*/

export default Modal;
