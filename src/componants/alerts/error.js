import React from "react";

export default function ErrorAlert({ title = "", body = "", setShowMassage }) {
  return (
    <div className="swal-overlay swal-overlay--show-modal" tabIndex="-1">
      <div className="swal-modal" role="dialog" aria-modal="true">
        <div className="swal-icon swal-icon--error">
          <div className="swal-icon--error__x-mark">
            <span className="swal-icon--error__line swal-icon--error__line--left"></span>
            <span className="swal-icon--error__line swal-icon--error__line--right"></span>
          </div>
        </div>
        <div className="swal-title" style={{}}>
          {title}
        </div>
        <div className="swal-text" style={{}}>
          {body}
        </div>
        <div className="swal-footer">
          <div className="swal-button-container">
            <button
              className="swal-button swal-button--confirm btn btn-danger"
              onClick={() => setShowMassage(null)}
            >
              OK
            </button>

            <div className="swal-button__loader">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
