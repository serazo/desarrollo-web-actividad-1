import React from "react";
import {Link} from "react-router-dom";

export const NavButton = ({isActive, setActive,title, href}) => {

  return (
    <li className="nav-item">
      <Link
        className={isActive  ? "nav-link text-white active" : "nav-link text-white"}
        to={href}
        onClick={setActive}
      >
        {title}
      </Link>
    </li>
  )
}