import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  return ReactDOM.createPortal(
    <div
      onClick={props.onDismiss}
      className="modal"
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "block",
        opacity: 1
      }}
      tabIndex="-1"
      role="dialog"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="modal-dialog"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.title}</h5>
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
            <p>{props.content}</p>
          </div>
          <div className="modal-footer">{props.actions}</div>
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
