import { Typography, Divider } from "antd";
import "./App.css";
import TodoList from "./components/ToDoList";
import Filters from "./components/Filters";

const { Title } = Typography;

function App() {
  return (
    <div
      style={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <Title style={{ textAlign: "center" }}>TODO APP with m1keydev</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
