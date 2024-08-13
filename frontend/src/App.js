import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CreateTodoModal from "./components/Modals/CreateTodoModal/CreateTodoModal";
import Todos from "./components/Todos/Todos";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import { setError } from "./reducer/slices/todoSlice";
import { fetchTodos } from "./reducer/thunk/todoThunk";

function App() {
  const todos = useSelector((state) => state.todoState.todos);
  const error = useSelector((state) => state.todoState.error);

  const [showModal, setShowModal] = useState(true);
  const dispatch = useDispatch();

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (error != null) {
    alert(error);
    dispatch(setError(null));
  }

  return (
    <div>
      <header className="App-header">
        <TodoHeader openModal={openModal} />
      </header>
      {showModal ? <CreateTodoModal closeModal={closeModal} /> : null}
      <Todos todos={todos} />
    </div>
  );
}

export default App;
