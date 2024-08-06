import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Todos from "./components/Todos";
import { fetchTodos } from "./thunk/todoThunk";

function App() {
  const todos = useSelector((state) => state.todoState.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <header className="App-header">
        <Todos todos={todos} />
      </header>
    </div>
  );
}

export default App;
