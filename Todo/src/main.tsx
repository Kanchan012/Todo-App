import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { TodoProvider } from "./context/TodoProvider";
import { ThemeProvider } from "./context/ThemeProvider";
import AllTasks from "./pages/AllTasks";
import CompletedTasks from "./pages/CompletedTasks";
import IncompleteTasks from "./pages/IncompleteTasks";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <AllTasks /> },
      { path: "/completed", element: <CompletedTasks /> },
      { path: "/incomplete", element: <IncompleteTasks /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider>
      <TodoProvider>
        <RouterProvider router={router} />
      </TodoProvider>
    </ThemeProvider>
     </Provider>
  </React.StrictMode>
);
