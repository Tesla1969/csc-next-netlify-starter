import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
  bgimage?: string;
};

const Background = (props: IBackgroundProps) => (
  <div className={`${props.color} ${props.bgimage}`}>{props.children}</div>
);

export { Background };
