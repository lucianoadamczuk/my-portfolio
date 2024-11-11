"use client";

import { ReactNode } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.css";
import { Icon } from "../../components";

interface Props {
  isOpen: boolean;
  children: ReactNode;
  onClick: () => void;
}
export default function Modal({ isOpen, children, onClick }: Props) {
  return createPortal(
    <>
      {isOpen ? (
        <section
          className={`${styles.portalContainer} ${isOpen ? styles.openPortalContainer : ""}`}
        >
          <div
            className={`${styles.portal} ${isOpen ? styles.openPortal : ""}`}
          >
            <button className={styles.button} onClick={onClick}>
              <Icon as="close" hover />
            </button>

            {children}
          </div>
        </section>
      ) : null}
    </>,
    document.body,
  );
}
