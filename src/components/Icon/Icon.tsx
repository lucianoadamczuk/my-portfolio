import { FaGithub, FaLinkedin, FaPhoneSquare } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiMailbox } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";
import { TbWorldWww } from "react-icons/tb";

import styles from "./Icon.module.css";

type Icons =
  | "github"
  | "linkedIn"
  | "location"
  | "phone"
  | "email"
  | "web"
  | "close";

interface Props {
  as: Icons;
  hover?: boolean;
}

export default function Icon({ as, hover = false }: Props) {
  const icons = {
    github: <FaGithub />,
    linkedIn: <FaLinkedin />,
    phone: <FaPhoneSquare />,
    location: <FaMapLocationDot />,
    email: <GiMailbox />,
    web: <TbWorldWww />,
    close: <IoIosCloseCircle />,
  };

  return (
    <div className={`${styles.icon} ${hover ? styles.iconHover : ""}`}>
      {icons[as]}
    </div>
  );
}
