// toujours importer React avec un fichier .tsx et un return jsx
import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export type TodoType = {
  id: number;
  text: string;
};

// export default function TodoList() {
// Nous préferons écrire const MonComposant = (props: Props) => {}
const TodoList = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  // Méthode qui permet d'ajouter une todo
  const addTodo = (todo: TodoType) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  // Méthode qui permet de modifier une todo
  const updateTodo = (
    todoId: number,
    // newValue: any
    newValue: { id: number; text: string }
  ) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev /*: any*/) =>
      prev.map((item /*: any*/) => (item.id === todoId ? newValue : item))
    );
  };

  // Méthode qui permet de supprimer une todo
  const removeTodo = (id: number) => {
    const removeArr = todos.filter((todo) => todo.id !== id);
    // const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
    // Supprimer en base de données la liste si vide
    if (removeArr.length === 0) {
      localStorage.removeItem("todos");
    }
  };

  // Ajout au localStorage la liste
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);
  // Récupération de la liste du localStorage
  useEffect(() => {
    const todosLocalStorage = localStorage.getItem("todos");
    console.log(todosLocalStorage);
    if (todosLocalStorage) {
      setTodos(JSON.parse(todosLocalStorage));
    }
  }, []);

  return (
    <div>
      <h1>GreenFlex Todo List</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  );
};

export default TodoList;
