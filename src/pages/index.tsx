import Layout from '../layout/Layout';
// import { Base } from '../templates/Base';
import SubHeader from '../subHeader/SubHeader';
import { Banner } from '../templates/Banner';
import { Footer } from '../templates/Footer'
import { Hero } from '../templates/Hero';
import { VerticalFeatures } from '../templates/VerticalFeatures';
const Index = () => {
  return (
    <Layout title=''>
      <Hero/>
      <SubHeader/>
      <VerticalFeatures/>
      <Banner/>
      <Footer/>
    </Layout>
  )
}

export default Index;
