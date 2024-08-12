import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Todos from "./components/Todos";
import TodoHeader from "./components/TodoHeader";
import { fetchTodos } from "./thunk/todoThunk";

function App() {
  const todos = useSelector((state) => state.todoState.todos);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <header className="App-header">
        <TodoHeader />
        <Todos todos={todos} />
      </header>
    </div>
  );
}

export default App;
