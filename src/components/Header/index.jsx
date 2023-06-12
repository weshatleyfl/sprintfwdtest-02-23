import React from "react";
import { Link } from "react-router-dom";
import './header.css';

const Header = ({ items, className = "" }) => {
  return (
    <div className={`header ${className}`}>
      <ul className="nav">
        {items.map((item, index) => {
          const {path,title} = item
          return <li className="nav_item" key={index}>
            <Link to={path}>{title}</Link>
          </li>
        })}
      </ul>
    </div>
  );
};

export default Header;
