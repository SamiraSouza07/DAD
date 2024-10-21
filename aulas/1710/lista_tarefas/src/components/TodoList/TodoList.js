import styles from "./TodoList.module.css"
import TodoItem from "../TodoItem/TodoItem"
function TodoList(props){
    return(
        <>
          <div className={styles.lista}>
            <TodoItem titulo="Tarefaaaaa"/>
            <TodoItem titulo="Tarefaaaaa"/>
            <TodoItem titulo="Tarefaaaaa"/>
            <TodoItem titulo="Tarefaaaaa"/>
          </div>
        </>
    )
}
export default TodoList