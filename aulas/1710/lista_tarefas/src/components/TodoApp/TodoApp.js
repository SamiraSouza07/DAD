import styles from "./TodoApp.module.css";
import { useState } from "react";
import TodoList from "../TodoList/TodoList";
import TodoFilter from "../TodoFilter/TodoFilter";
import TodoForm from "../TodoForm/TodoForm";

function TodoApp(props) {
  const[tasks,setTasks] = useState([])
  const addTask = (text)=>{
    const newTask={
      id: Date.now(),
      texto: text,
      completo: false
    }
    setTasks([...tasks,newTask])
  }

  const removeTask = (id)=>{
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const editTask = (id,text,completed)=>{
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, texto: text, completo: completed }
          : task
      )
    )
  }
  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.titulo}>{props.titulo}</h1>
      <TodoForm />
      <TodoFilter />
      <TodoList />
      </div>
    </>
  );
}

export default TodoApp;
