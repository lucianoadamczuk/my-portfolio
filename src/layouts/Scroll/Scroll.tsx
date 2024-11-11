import { ReactNode } from "react";

import styles from "./Scroll.module.css";

interface Props {
  children: ReactNode;
}
export default function Scroll({ children }: Props) {
  return <section className={styles.scroll}>{children}</section>;
}
