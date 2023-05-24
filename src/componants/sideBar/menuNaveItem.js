import React from "react";

export default function MenuNaveItem(
  props = {
    text: "",
    isClicked: false,
    icon: "",
    children: [],
  }
) {
  return (
    <li className={"nav-item " + (props.isClicked ? "active" : "")}>
      <a data-toggle="collapse" href={"#" + props.text}>
        <i className={"fas " + props.icon}></i>
        <p>{props.text}</p>
        <span className="caret"></span>
      </a>
      <div
        className={"collapse " + (props.isClicked ? "show" : "")}
        id={props.text}
      >
        <ul className="nav nav-collapse">
          {props.children.map((item) => item)}
        </ul>
      </div>
    </li>
  );
}
