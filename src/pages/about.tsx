import React from 'react';
import Layout from '../layout/Layout';

import SubHeader from '../subHeader/SubHeader';
import { Hero } from '../templates/Hero';
import { Footer } from '../templates/Footer';

const About = () => {
  return (
    <div style={{ backgroundColor: '#e5f4ff' }}>
      <Layout title="">
        <Hero />
        <SubHeader />
        <div className="flex flex-col w-3/4 py-8 px-6 rounded-lg border border-gray-300 my-8 mx-auto shadow-lg bg-white">
          <h1 className="text-3xl">About</h1>
          <p className="my-3">
            We are centrally located in Newtown CT and have been in business
            since 2020.
          </p>
          <p className="my-3">
            We focus on our commitment to provide quality cleaning services at
            each job we do.
          </p>
          <p className="my-3">
            Our contact form only takes a couple of seconds to fill out so don't
            hesitate getting in touch with Crystal Shine cleaning now.
          </p>
        </div>
        <Footer />
      </Layout>
    </div>
  );
};

export default About;
