import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Quality Home and Office Cleaning you can trust!"
      subtitle="Get your Free Estimate Now."
      button={
        <Link href="/contact">
          <a>
            <Button>Contact Us</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
