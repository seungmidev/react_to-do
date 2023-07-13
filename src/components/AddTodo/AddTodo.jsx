import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import styles from './AddTodo.module.css';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length === 0) {
      return;
    }
    onAdd({id: uuidv4(), text, status: "active"});
    setText("");
  }

  return (
    <form className={styles.form} onSubmit={handSubmit}>
      <input type="text" placeholder="Add Todo" value={text} onChange={handleChange} className={styles.input} />
      <button className={styles.btn}>Add</button>
    </form>
  )
}
