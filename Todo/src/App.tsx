import TodoForm from "./components/TodoForm";
import { TodoProvider } from "./context/TodoContext";

export default function App() {
  return (
    <TodoProvider>
      <TodoForm />
    </TodoProvider>
  );
}