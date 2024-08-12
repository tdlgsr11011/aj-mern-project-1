import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Todos from "./components/Todos/Todos";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import { fetchTodos } from "./thunk/todoThunk";
import CreateTodoModal from "./components/Modals/CreateTodoModal/CreateTodoModal";

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
        <TodoHeader openModal={openModal} />
        <Todos todos={todos} />
        {showModal ? <CreateTodoModal closeModal={closeModal} /> : null}
      </header>
    </div>
  );
}

export default App;
