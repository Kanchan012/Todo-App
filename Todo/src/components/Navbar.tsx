import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme(); 

  const links: { path: string; label: string }[] = [
    { path: "/", label: "All" },
    { path: "/completed", label: "Completed" },
    { path: "/incomplete", label: "Incomplete" },
  ];

  return (
    <nav className="flex justify-between items-center p-4 bg-yellow-200 dark:bg-gray-800 text-black dark:text-white shadow-md">
      <h1 className="text-xl font-bold">Todo App</h1>

      <div className="flex items-center gap-4">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? "font-bold underline" : "hover:underline"
            }
          >
            {link.label}
          </NavLink>
        ))}

        <button
          onClick={toggleTheme}
          className="ml-4 px-3 py-1 rounded bg-gray-300 dark:bg-gray-700 text-black dark:text-white hover:scale-105 transition-transform"
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
