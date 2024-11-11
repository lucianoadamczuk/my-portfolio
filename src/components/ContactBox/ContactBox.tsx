import { ReactNode } from "react";
import Text from "../Text/Text";
import styles from "./ContactBox.module.css";

interface Props {
  href?: string;
  icon: ReactNode;
  text?: string;
}

export default function ContactBox({ href, icon, text }: Props) {
  if (href) {
    return (
      <a href={href} target="_blank" className={styles.boxLink}>
        {icon}
        {text && <Text Tag="span" color="gray" text={text} />}
      </a>
    );
  } else {
    return (
      <div className={styles.box}>
        {icon}
        {text && <Text Tag="span" color="gray" text={text} />}
      </div>
    );
  }
}
