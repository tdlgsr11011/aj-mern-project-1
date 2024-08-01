import "./App.css";
import { useEffect, useState } from "react";
import Todos from "./components/Todos";

function App() {
  const [myTodos, setMyTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/todos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => setMyTodos(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <header className="App-header">
        <Todos todos={myTodos} />
      </header>
    </div>
  );
}

export default App;
