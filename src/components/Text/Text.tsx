import styles from "./Text.module.css";

interface Props {
  Tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  className?: string;
  family?: "title" | "base";
  size?: "sm" | "md" | "lg" | "xl";
  color?: "light" | "gray" | "dark" | "primary" | "secondary";
  uppercase?: boolean;
  text: string | string[];
}

export default function Text({
  Tag,
  className = "",
  size = "md",
  color = "light",
  family = "base",
  text,
}: Props) {
  const familyClass = family ? styles[family] : "";
  const colorClass = color ? styles[color] : "";
  const sizeClass = size ? styles[size] : "";
  const classNames = `${styles.text} ${familyClass} ${colorClass} ${sizeClass}`;

  if (!Array.isArray(text)) {
    return <Tag className={`${classNames} ${className}`}>{text}</Tag>;
  } else {
    return (
      <div className={styles.paragraphContainer}>
        {text.map((line) => (
          <Tag className={`${classNames} ${className}`} key={line}>
            {line}
          </Tag>
        ))}
      </div>
    );
  }
}
