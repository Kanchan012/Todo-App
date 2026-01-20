import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <h1>Todo App</h1>
      <div className="nav-links">
        <NavLink to="/" end>All</NavLink>
        <NavLink to="/completed">Completed</NavLink>
        <NavLink to="/incomplete">Incomplete</NavLink>
      </div>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </nav>
  );
};

export default Navbar;
