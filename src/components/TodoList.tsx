import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default function TodoList() {
  const [todos, setTodos]: any = useState([]);

  // Méthode qui permet d'ajouter une todo
  const addTodo = (todo: any) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  // Méthode qui permet de modifier une todo
  const updateTodo = (todoId: number, newValue: any) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev: any) =>
      prev.map((item: any) => (item.id === todoId ? newValue : item))
    );
  };

  // Méthode qui permet de supprimer une todo
  const removeTodo = (id: number) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  return (
    <div>
      <h1>GreenFlex Todo List</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  );
}
