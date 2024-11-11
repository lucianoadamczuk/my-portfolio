import { useState } from "react";

import styles from "./Nav.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Nav() {
  const router = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [linkAnimationName, setLinkAnimationName] = useState<
    "linkEnter" | "linkLeave"
  >("linkLeave");

  const { t } = useTranslation("translation");
  const routes = t("routes", { returnObjects: true });

  const handleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);

      setTimeout(() => {
        setLinkAnimationName("linkEnter");
      }, 800);
    }

    if (isOpen) {
      setLinkAnimationName("linkLeave");
      setTimeout(() => {
        setIsOpen(false);
      }, 1000);
    }
  };

  return (
    <nav className={styles.nav}>
      <div
      className={styles.menu}
        style={{height: isOpen? "90dvh" : "0"}}
      >
        <div className={styles.linksContainer}>
          {routes.map(({ name, href }, index) => (
            <Link
              key={`link-with-path-${href}`}
              to={`/${href}`} //
              onClick={(e) => {
                e.preventDefault();
                handleMenu();
                setTimeout(() => {
                  document.startViewTransition(() => {
                    router(`/${href}`);
                  });
                }, 2000);
              }}
              className={`${styles.link} ${styles[linkAnimationName]}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
      <button className={styles.button} onClick={handleMenu}></button>
    </nav>
  );
}
