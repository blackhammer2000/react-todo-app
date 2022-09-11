import "./App.css";
import "./components/css/bootstrap.min.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
import { useFetchTodos } from "./hooks/fetchTodos";
import Loader from "./components/Loader";

function App() {
  const {
    input,
    todos,
    error,
    loading,
    editedTask,
    buttonText,
    setTodos,
    setInput,
    setEditTask,
    setButtonText,
  } = useFetchTodos();

  const editTask = (id) => {
    const selectedTask = todos.find((todo) => todo.id === id);
    setInput(selectedTask.body);
    setEditTask(selectedTask);
    setButtonText("OK");
  };

  return (
    <div className="App container  mt-2">
      {loading && (
        <div className="loading d-flex justify-content-center align-items-center container font-weight-bold">
          <Loader />
        </div>
      )}
      {error && <div className="container font-weight-bold">{error}</div>}
      {!loading && !todos && !error && (
        <div className="container font-weight-bold">No data found...</div>
      )}
      {(todos || !todos) && !loading && (
        <>
          <Header />
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editedTask={editedTask}
            setEditTask={setEditTask}
            buttonText={buttonText}
            setButtonText={setButtonText}
          />
          {todos && (
            <Todolist todos={todos} setTodos={setTodos} editTask={editTask} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
