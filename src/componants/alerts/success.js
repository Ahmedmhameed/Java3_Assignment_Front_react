import React from "react";

export default function SuccessAlert({
  title = "",
  body = "",
  setShowMassage,
}) {
  return (
    <div className="swal-overlay swal-overlay--show-modal" tabIndex="-1">
      <div className="swal-modal" role="dialog" aria-modal="true">
        <div className="swal-icon swal-icon--success">
          <span className="swal-icon--success__line swal-icon--success__line--long"></span>
          <span className="swal-icon--success__line swal-icon--success__line--tip"></span>

          <div className="swal-icon--success__ring"></div>
          <div className="swal-icon--success__hide-corners"></div>
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
              className="swal-button swal-button--confirm btn btn-success"
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
