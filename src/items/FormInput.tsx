import { ChangeEvent } from "react";
// CSS
import styles from "../styles/TaskForm.module.css";

interface Props {
  type?: string;
  name: string;
  placeholder: string;
  label: string;
  value: string | number;
  handChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export default function FormInput({
  type = "text",
  name,
  placeholder,
  label,
  value,
  handChange,
}: Props) {
  return (
    <div className={styles.input_container}>
      <label htmlFor={name}>{label}:</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handChange}
      />
    </div>
  );
}
