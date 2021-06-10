import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

export default function TodoForm(props: any) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    // @ts-ignore: Object is possibly 'null'.
    inputRef.current.focus();
  });

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    props.onSubmit({
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
}

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
