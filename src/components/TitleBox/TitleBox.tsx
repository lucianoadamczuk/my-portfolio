import Text from "../Text/Text";

interface Props {
  subtitle: string;
  title: string;
}
export default function TitleBox({ subtitle, title }: Props) {
  return (
    <>
      <Text Tag="h2" color="light" size="md" text={subtitle} />
      <Text Tag="h1" color="primary" family="title" size="xl" text={title} />
    </>
  );
}
