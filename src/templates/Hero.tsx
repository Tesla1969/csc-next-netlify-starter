import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="cs-blue" bgclass="bg-best-cleaning">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="#">
            <a>Link</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Another Link</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <p className="cs-lime">Crystal Shine Cleaning Services</p>
          </>
        }
        description=""
        button={
          <Link href="/contact">
            <a>
              <Button xl>Contact Us</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
