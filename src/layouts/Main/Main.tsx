import { ReactNode } from "react";

import styles from "./Main.module.css";
import Nav from "../Nav/Nav";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

interface Props {
  pageName: string;
  children: ReactNode;
  src: string;
  alt: string;
}

export default function Main({ pageName, children, src, alt }: Props) {
  return (
    <div className={styles.pageLayout}>
      <div className={styles.pageNameContainer}>
        <span className={styles.pageName}> {pageName} </span>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <main className={styles.main}>
            <LanguageSwitcher />
            {children}
          </main>
          <aside className={styles.aside}>
            <img src={src} alt={alt} className={styles.image} />
          </aside>
          <Nav /> 
        </div>
      </div>
    </div>
  );
}
