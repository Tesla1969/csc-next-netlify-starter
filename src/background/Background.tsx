import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
  bgclass?: string;
};

const Background = (props: IBackgroundProps) => (
  <div className={`${props.color} ${props.bgclass}`}>{props.children}</div>
);

export { Background };
