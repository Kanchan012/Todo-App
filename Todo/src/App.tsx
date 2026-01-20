import TodoForm from "./components/TodoForm";
import { TodoProvider } from "./context/TodoProvider";

export default function App() {
  return (
    <TodoProvider>
      <TodoForm />
    </TodoProvider>
  );
}