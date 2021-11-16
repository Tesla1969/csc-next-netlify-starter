import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => {
// const Layout = ({ children}: Props) => {
  return (
    <>
      <div>
        <span>{title}</span>
        {children}
      </div>
    </>
  );
};
export default Layout;
