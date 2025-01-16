import { ThemeProvider } from "./contexts/ThemeContext";
import { useTheme } from "./contexts/ThemeContext";
import { ThemeToggle } from "./components/ThemeToggle";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";

const TodoApp = () => {
  const { darkMode } = useTheme();
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 min-h-screen p-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Todo App</h1>
            <ThemeToggle />
          </div>
          <TodoInput onAdd={addTodo} />
          <div className="mt-6">
            <TodoList
              todos={todos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <TodoApp />
    </ThemeProvider>
  );
};

export default App;
