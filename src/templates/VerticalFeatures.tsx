import React from 'react';

import Link from 'next/link';

import { Background } from '../background/Background';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

const VerticalFeatures = () => (
  <>
    <Background color="bg-pink" bgclass="bg-header">
      <Section yPadding="py-6">
        <NavbarTwoColumns>
          <li>
            <Link href="#">
              <a>Contact Us</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>
    </Background>
    <Section yPadding="py-2">
      <h2 className="text-2xl" color="cs-lime">
        Crystal Shine Cleaning
      </h2>
      <span color="cs-orange">
        Specialty cleaning services including House Cleaning, Office Cleaning,
        Realtor move-ins & move-outs, Construction Cleanups or labor assistance.
        We provide services for the Danbury, Brookfield, Newtown, Easton,
        Redding & Ridgefield areas of Connecticut
      </span>
    </Section>

    <Section title="" description="" yPadding="py-0">
      <VerticalFeatureRow
        title="House Cleaning"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
        image="/assets/images/feature.svg"
        imageAlt="First feature alt text"
      />
      <VerticalFeatureRow
        title="Office Cleaning"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
        image="/assets/images/feature2.svg"
        imageAlt="Second feature alt text"
        reverse
      />
      <VerticalFeatureRow
        title="Condominium and all Realtor Cleanings"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
        image="/assets/images/feature3.svg"
        imageAlt="Third feature alt text"
      />
    </Section>
  </>
);

export { VerticalFeatures };
