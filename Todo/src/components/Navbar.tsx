import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center p-4 bg-yellow-200 dark:bg-gray-800 text-black dark:text-white">
      <h1 className="text-xl font-bold">Todo App</h1>

      <div className="flex items-center gap-4">
        <NavLink
          to="/"
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? "font-bold underline" : "hover:underline"
          }
        >
          All
        </NavLink>
        <NavLink
          to="/completed"
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? "font-bold underline" : "hover:underline"
          }
        >
          Completed
        </NavLink>
        <NavLink
          to="/incomplete"
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? "font-bold underline" : "hover:underline"
          }
        >
          Incomplete
        </NavLink>

        <button
          onClick={toggleTheme}
          className="ml-4 px-2 py-1 rounded bg-gray-300 dark:bg-gray-700"
        >
          {theme === "light" ? " Dark" : "Light"}
        </button>
      </div>
    </nav>
  );
}
