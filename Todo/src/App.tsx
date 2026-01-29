import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useReminders from "./hooks/useReminders";

const App: React.FC = () => {
  useReminders();

  return (
    <>
      <Navbar />
      <TodoForm />
      <Outlet />
       <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default App;
