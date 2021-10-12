import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100" bgimage="bgclean">
    <Section>
      <CenteredFooter logo={<Logo />} iconList={<></>}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Contact</a>
          </Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
