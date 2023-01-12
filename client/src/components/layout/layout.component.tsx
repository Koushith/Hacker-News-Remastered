import { Header } from "../header/header.componant";

interface LayoutComponentProps {
  children: React.ReactNode;
}

export const Layout = (props: LayoutComponentProps) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
