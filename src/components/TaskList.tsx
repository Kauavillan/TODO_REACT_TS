import styles from "../styles/TaskList.module.css";
import { ITask } from "../interfaces/Task";
import { BsPencil, BsTrash } from "react-icons/bs";
interface Props {
  taskList: ITask[];
  handleDelete: (id: number) => void;
  handleModal: (task: ITask) => void;
}
export default function TaskList({
  taskList,
  handleDelete,
  handleModal,
}: Props) {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <BsPencil onClick={() => handleModal(task)} />
              <BsTrash
                onClick={() => {
                  handleDelete(task.id);
                }}
              />
            </div>
          </div>
        ))
      ) : (
        <p>Não tem tarefas cadastradas</p>
      )}
    </>
  );
}
