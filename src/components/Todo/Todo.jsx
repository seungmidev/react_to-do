import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css';

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({...todo, status});
  }
  const handleDelete = () => onDelete(todo);

  return (
    <li className={styles.todo}>
      <input id={id} className={styles.checkbox} type="checkbox" checked={status === "completed"} onChange={handleChange} />
      <label htmlFor={id} className={styles.text}>{text}</label>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.btn}><FaTrashAlt /></button>
      </span>
    </li>
  )
}
