import styles from "./TodoList.module.css";
import TodoItem from "../TodoItem/TodoItem";

function TodoList(props) {
    return (
        <>
            <div className={styles.lista}>
                {props.tasks.map((task) => (
                    <TodoItem key={task.id} tarefa={task} editTask={props.editTask} removeTask={props.removeTask}/>
                ))}
            </div>
        </>
    );
}

export default TodoList;
