import "./App.css";
import { useEffect } from "react";
import Todos from "./components/Todos";

function App() {
  useEffect(() => {
    fetch("http://localhost:5000/todos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r)
      .catch((e) => console.log(e));
  }, []);

  const todos = [
    {
      title: "1",
      description: "d",
      id: "id",
      isDone: true,
    },
  ];

  return (
    <div>
      <header className="App-header">
        <Todos todos={todos} />
      </header>
    </div>
  );
}

export default App;
