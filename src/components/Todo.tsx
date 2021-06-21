// toujours importer React avec un fichier .tsx et un return jsx
import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import styled from "styled-components";
import TodoList, { TodoType } from "./TodoList";

// initialiser avant l'utilisation
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px auto;
  color: #fff;
  background: #1aaa55;

  padding: 16px;
  border-radius: 5px;
  width: 90%;

  :nth-child(2n + 1) {
    background: #242245;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
`;

// Pas de any (au maximum)
// type TodoProps = {
//   todos: any;
//   removeTodo: any;
//   updateTodo: any;
// };

type TodoProps = {
  todos: TodoType[];
  removeTodo: (id: number) => void;
  updateTodo: (id: number, value: { id: number; text: string }) => void;
};

//export default function Todo({ todos, removeTodo, updateTodo }: TodoProps) {
// Nous préferons écrire const MonComposant = (props: Props) => {}
const Todo = ({ todos, removeTodo, updateTodo }: TodoProps) => {
  // tu peux typer ton state en utiliser useState<MonType>
  const [edit, setEdit] = useState<{ id: number | null; value: string }>({
    id: null,
    value: "",
  });

  //  const submitUpdate = (value: any) => {
  const submitUpdate = (value: { id: number; text: string }) => {
    const { id } = edit;
    if (!id) return;
    updateTodo(id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm onSubmit={submitUpdate} />;
  }

  return (
    <>
      {todos.map((todo) => (
        <Row key={todo.id}>
          <div key={todo.id}>{todo.text}</div>
          <Icons>
            <RiCloseCircleLine
              onClick={() => removeTodo(todo.id)}
              className="delete-icon"
            />
            <TiEdit
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              className="edit-icon"
            />
          </Icons>
        </Row>
      ))}
    </>
  );

  // return todos.map((todo: TodoType) => (
  //   <Row key={todo.id}>
  //     <div key={todo.id}>{todo.text}</div>
  //     <Icons>
  //       <RiCloseCircleLine
  //         onClick={() => removeTodo(todo.id)}
  //         className="delete-icon"
  //       />
  //       <TiEdit
  //         onClick={() => setEdit({ id: todo.id, value: todo.text })}
  //         className="edit-icon"
  //       />
  //     </Icons>
  //   </Row>
  // ));
};

// const Row = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 4px auto;
//   color: #fff;
//   background: #1aaa55;

//   padding: 16px;
//   border-radius: 5px;
//   width: 90%;

//   :nth-child(2n + 1) {
//     background: #242245;
//   }
// `;

// const Icons = styled.div`
//   display: flex;
//   align-items: center;
//   font-size: 24px;
//   cursor: pointer;
// `;

export default Todo;
