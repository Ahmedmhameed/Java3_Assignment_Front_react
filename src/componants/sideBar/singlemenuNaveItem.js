import React from "react";
import { Link } from "react-router-dom";

export default function SingleMenuNaveItem({
  text = "",
  isClicked = false,
  url = "",
  setClicked,
}) {
  return (
    <li
      className={isClicked ? "b-g" : ""}
      onClick={() => {
        setClicked(text);
      }}
    >
      <Link to={url}>
        <span className="sub-item">{text}</span>
      </Link>
    </li>
  );
}
