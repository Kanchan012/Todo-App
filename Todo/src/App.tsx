import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <TodoForm />
      <Outlet />
    </>
  );
};

export default App;
