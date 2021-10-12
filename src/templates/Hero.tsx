import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
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
            <span className="cs-lime">Crystal Shine Cleaning Services</span>
            {'\n'}
            <span className="text-primary-500 text-sm cs-orange">
              Specialty cleaning services in the following Connecticut locations
            </span>
          </>
        }
        description="Serving the greater Danbury, Brookfield, Newtown, Easton, Redding & Ridgefield areas of Connecticut"
        button={
          <Link href="#">
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
