import React from "react";

export default function DataBox({ icon = "", text = "", num = 0 }) {
  return (
    <div className="col-sm-12 col-md-6">
      <div className="card card-stats card-info card-round">
        <div className="card-body">
          <div className="row">
            <div className="col-5">
              <div className="icon-big text-center">
                <i className={icon}></i>
              </div>
            </div>
            <div className="col-7 col-stats">
              <div className="numbers">
                <p className="card-category">{text}</p>
                <h4 className="card-title text-center">{num}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
