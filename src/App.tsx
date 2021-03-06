import styled from "styled-components";
import "./App.css";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <Wrapper>
      <TodoList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 520px;
  min-height: 600px;
  background: #bdc3c7;
  text-align: center;
  margin: 128px auto;
  border-radius: 10px;
  padding-bottom: 32px;
`;
