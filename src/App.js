import "./App.css";
import "./components/css/bootstrap.min.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
import { useFetchTodos } from "./hooks/fetchTodos";
import Loader from "./components/Loader";

function App() {
  const { input, todos, error, loading, setTodos, setInput } = useFetchTodos();

  return (
    <div className="App container border mt-2">
      {loading && (
        <div className="loading d-flex justify-content-center align-items-center container border font-weight-bold">
          <Loader />
        </div>
      )}
      {error && <div className="container font-weight-bold">{error}</div>}
      {todos && (
        <>
          <Header />
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          />
          <Todolist todos={todos} setTodos={setTodos} />
        </>
      )}
    </div>
  );
}

export default App;
