import React from 'react';

import Layout from '../layout/Layout';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';

const Base = () => (
  <div className="antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Layout title="hello next js" />

    <Banner />
    <Footer />
  </div>
);

export { Base };
