import React from "react";
import Modal from "../Modal";

const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <button type="button" className="btn btn-secondary">
        Cancel
      </button>
      <button type="button" className="btn btn-danger">
        Delete
      </button>
    </React.Fragment>
  );

  return (
    <div>
      StreamDelete
      <Modal title="Delete Stream" msg="Are you sure?" actions={actions} />
    </div>
  );
};

export default StreamDelete;
