import React from 'react';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Background } from '../background/Background';
import Link from 'next/link';

const SubHeader = () => {
  return (
    <Background color="cs-pink" bgclass="bg-logo-blend">
      <Section yPadding="py-6">
        <NavbarTwoColumns>
          <li>
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>
    </Background>
  );
};

export default SubHeader;
