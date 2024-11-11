import styles from "./Pill.module.css";

interface Props {
  text: string;
  onClick: () => void;
}

export default function Pill({ text, onClick }: Props) {
  return (
    <div className={styles.pill} onClick={onClick}>
      {text}
    </div>
  );
}
