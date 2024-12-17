import { Dropdown } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul className="flex justify-center bg-blue-300 p-4 gap-5">
        <li>
          <NavLink
            to={"/"}
            className={(props) =>
              props.isActive ? "text-red-500" : "text-teal-500"
            }
            style={({ isActive }) =>
              // const {isActive} = props;
              isActive ? { color: "red" } : { color: "yellow" }
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/form"}
            className={(props) =>
              props.isActive ? "text-red-500" : "text-teal-500"
            }
            style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "yellow" }
            }
          >
            Form nhân viên
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
