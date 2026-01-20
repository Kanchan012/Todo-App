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
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Todo Form */}
        <TodoForm />

        {/* Main Content */}
        <main className="flex-1 p-4 max-w-2xl mx-auto w-full">
          <Routes>
            <Route path="/" element={<AllTasks />} />
            <Route path="/completed" element={<CompletedTasks />} />
            <Route path="/incomplete" element={<IncompleteTasks />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
