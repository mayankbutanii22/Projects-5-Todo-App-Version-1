import TodoItem from "./TodoItem.jsx";
import styles from "./TodoItems.module.css";

const  todoItems = ({todoItems,onDeleteClick}) => { 
  return (
    <>
     <div className={styles.itemsContainer}>
      {todoItems.map((item) => 
        <TodoItem key={item.name} todoName={item.name} todoDate={item.dueDate} onDeleteClick={onDeleteClick}/>
      )}
    </div>
    </>
  );
};

export default todoItems;