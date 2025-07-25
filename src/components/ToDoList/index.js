import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
// import { addTodo } from "../../redux/actions";

import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todoListRemainingSelector } from "../../redux/selectors";
import todoListSlice from "./toDoSlice";
import Todo from "../Todo";
export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const todoList = useSelector(todoListRemainingSelector);
  // const searchText = useSelector(searchTextSelector);

  // console.log(todoList);
  const dispatch = useDispatch();
  const handleAddButtonClick = () => {
    dispatch(
      todoListSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        complete: false,
      })
    );

    setTodoName("");
    setPriority("Medium");
  };

  const handleInputChange = (event) => {
    setTodoName(event.target.value);
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            id={todo.id}
            key={todo.id}
            name={todo.name}
            priority={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button onClick={handleAddButtonClick} type="primary">
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
