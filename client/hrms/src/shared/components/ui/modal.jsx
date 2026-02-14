import React from "react";

function Modal({ title, children, onSubmit, submitText, onClose }) {
    return (
        <div className="modal fade" id="myModal" tabIndex='-1' aria-hidden='true'>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss='modal' aria-hidden='close'></button>
                    </div>
                    <div className="modal-body">{children}</div>
                    <div className="modal-footer">
                        <button onClick={onClose} className="btn btn-secondary" data-bs-dismiss='modal'>
                            Close
                        </button>
                        <button type="submit" className="btn btn-primary" onClick={onSubmit}>
                            {submitText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;