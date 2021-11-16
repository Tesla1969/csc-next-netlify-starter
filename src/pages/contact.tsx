import React from 'react';

import Layout from '../layout/Layout';
import Form from '../form/Form';
import SubHeader from '../subHeader/SubHeader';
import { Footer } from '../templates/Footer';
import { Hero } from '../templates/Hero';


const Contact = () => {
  return (
    <div style={{ backgroundColor: '#e5f4ff' }}>
      <Layout title="">
        <Hero />
        <SubHeader />
        <Form />
        <Footer />
      </Layout>
    </div>
  );
};

export default Contact;
