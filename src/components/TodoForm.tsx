// toujours importer React avec un fichier .tsx et un return jsx
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

// initialiser avant l'utilisation
const Form = styled.form`
  margin-bottom: 32px;
`;

const Input = styled.input`
  padding: 14px 32px 14px 16px;
  border-radius: 4px 0 0 4px;
  border: 2px solid #95a5a6;
  outline: none;
  width: 320px;
  background: transparent;
  color: #fff;

  ::placeholder {
    color: #e2e2e2;
  }
`;

const Button = styled.button`
  padding: 16px;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  outline: none;
  background: #95a5a6;
  color: #fff;
  text-transform: capitalize;
`;

// export default function TodoForm(props: any) {
// Nous préferons écrire const MonComposant = (props: Props) => {}
const TodoForm = ({
  onSubmit,
}: {
  onSubmit: (values: { id: number; text: string }) => void;
}) => {
  const [input, setInput] = useState<string>("");

  // useRef tu peux lui donner le type HTMLInputElement
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
    // // @ts-ignore: Object is possibly 'null'.
    // inputRef.current.focus();
  });

  // const handleChange = (e: any) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // const handleSubmit = (e: any) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        onChange={handleChange}
        ref={inputRef}
      />
      <Button>Add todo</Button>
    </Form>
  );
};

// const Form = styled.form`
//   margin-bottom: 32px;
// `;

// const Input = styled.input`
//   padding: 14px 32px 14px 16px;
//   border-radius: 4px 0 0 4px;
//   border: 2px solid #95a5a6;
//   outline: none;
//   width: 320px;
//   background: transparent;
//   color: #fff;

//   ::placeholder {
//     color: #e2e2e2;
//   }
// `;

// const Button = styled.button`
//   padding: 16px;
//   border: none;
//   border-radius: 0 4px 4px 0;
//   cursor: pointer;
//   outline: none;
//   background: #95a5a6;
//   color: #fff;
//   text-transform: capitalize;
// `;

export default TodoForm;
