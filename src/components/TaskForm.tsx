import { useState, ChangeEvent, FormEvent, useEffect } from "react";

import FormInput from "../items/FormInput";

// CSS
import styles from "../styles/TaskForm.module.css";

//Interfaces
import { ITask } from "../interfaces/Task";
interface Props {
  btnText: string;
  taskList: ITask[];
  handleUpdate?: (id: number, title: string, difficulty: number) => void;
  task?: ITask | null;
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}
export default function TaskForm({
  btnText,
  taskList,
  setTaskList,
  task,
  handleUpdate,
}: Props) {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleUpdate) {
      handleUpdate(id, title, difficulty);
    } else {
      const id = Math.floor(Math.random() * 1000);
      const newTask: ITask = { id, title, difficulty };
      setTaskList!([...taskList, newTask]);
      setTitle("");
      setDifficulty(0);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "difficulty") {
      setDifficulty(parseInt(e.target.value));
    }
  };

  useEffect(() => {
    if (task) {
      setDifficulty(task.difficulty);
      setTitle(task.title);
      setId(task.id);
    }
  }, [task]);

  return (
    <form className={styles.form} onSubmit={addTaskHandler}>
      <FormInput
        name="title"
        label="Título"
        placeholder="Título da tarefa"
        value={title}
        handChange={handleChange}
      />
      <FormInput
        name="difficulty"
        label="Dificuldade"
        placeholder="Dificuldade da tarefa"
        type="number"
        value={difficulty}
        handChange={handleChange}
      />
      <input type="submit" value={btnText} />
    </form>
  );
}
