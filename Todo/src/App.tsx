import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import AllTasks from "./pages/AllTasks";
import CompletedTasks from "./pages/CompletedTasks";
import IncompleteTasks from "./pages/IncompleteTasks";

const App: React.FC = () => {
  return (
     <BrowserRouter>
      <Navbar />
      <TodoForm />
      <Routes>
        <Route path="/" element={<AllTasks />} />
        <Route path="/completed" element={<CompletedTasks />} />
        <Route path="/incomplete" element={<IncompleteTasks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
