import { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import styled from "styled-components";

type TodoProps = {
  todos: any;
  removeTodo: any;
  updateTodo: any;
};

export default function Todo({ todos, removeTodo, updateTodo }: TodoProps) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value: any) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo: any, index: number) => (
    <Row key={index}>
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
  ));
}

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
