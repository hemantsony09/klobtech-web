import React from "react";
import { Link } from "react-router-dom";
import { ServiceSubItem } from "./types";
import "./submenu.css";

interface SubMenuProps {
  items: ServiceSubItem[];
}

const SubMenu: React.FC<SubMenuProps> = ({ items }) => {
  return (
    <div
      className="submenu"
      style={{
        animation: "fadeIn 0.2s ease-out forwards",
      }}
    >
      {items.map((item) => (
        <Link key={item.name} to={item.path} className="submenu-link">
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default SubMenu;
