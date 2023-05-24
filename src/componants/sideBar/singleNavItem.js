import React from "react";
import { Link } from "react-router-dom";

export default function SingleNavItem({
  text = "",
  isClicked = false,
  url = "",
  icon = "",
  setClicked,
}) {
  return (
    <li
      className={"nav-item " + (isClicked ? "active" : "")}
      onClick={() => {
        setClicked(text);
      }}
    >
      <Link to={url}>
        <i className={"fas " + icon}></i>
        <p>{text}</p>
      </Link>
    </li>
  );
}
