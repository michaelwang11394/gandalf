"use client";
import React, { useEffect } from "react";

import Form from "@/components/Form";
import Header from "@/components/Header";
import TODOHero from "@/components/TODOHero";
import TODOList from "@/components/TODOList";

// import Gandalf from "gandalf-react-component";

import Gandalf from "../../../frontend/src/index";

function Home() {
  const [todos, setTodos] = React.useState([]);

  // Retrieve data from localStorage when component mounts
  React.useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const todos_completed = todos.filter(
    (todo) => todo.is_completed == true
  ).length;
  const total_todos = todos.length;
  return (
    <div className="wrapper">
      <Gandalf
        productName="Todo App"
        isWidgetVisible={true}
        apiUrl="http://localhost:8000"
      />
      <Header className="bg-pink-500 text-4xl text-white" />
      <TODOHero todos_completed={todos_completed} total_todos={total_todos} />
      <Form todos={todos} setTodos={setTodos} />
      <TODOList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Home;
