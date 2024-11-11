import { Link, useNavigate } from "react-router-dom";
import Text from "../Text/Text";
import styles from "./ProjectBox.module.css";

interface Props {
  slug: string;
  title: string;
  description: string;
}

export default function ProjectBox({ slug, title, description }: Props) {
  const navigate = useNavigate();

  function handleNavigation(e: React.MouseEvent, href: string) {
    e.preventDefault();
    if (!document.startViewTransition) {
      navigate(`/projects/${href}`);
    }

    document.startViewTransition(() => {
      navigate(`/projects/${href}`);
    });
  }

  return (
    <Link
      to={`/projects/${slug}`}
      onClick={(e) => {
        handleNavigation(e, slug);
      }}
      className={styles.projectBox}
    >
      <Text Tag="h4" size="lg" color="secondary" text={title} />
      <Text Tag="p" text={description} />
    </Link>
  );
}
