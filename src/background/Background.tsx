import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
};

const Background = (props: IBackgroundProps) => (
  <div
    style={{ backgroundImage: 'url(./background/pexels5217889.jpg)' }}
    className={props.color}
  >
    {props.children} ..
  </div>
);

export { Background };
