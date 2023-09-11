import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const About = () => {
  return (
    <>
      <Navbar transparent={false} />
      <div className='relative pt-16 pb-16 text-justify px-8'>
        <h1 className='bold text-4xl lg:px-32 xl:px-48 sm:px-24 xs:px-auto'>
          Defying Limits, Redefining Payments:
        </h1>
        <p className='text-xl lg:px-32 xl:px-48 sm:px-24 xs:px-auto pt-6'>
          At SOLDI, we boldly embrace the challenge of supporting innovative
          businesses across the globe, transcending borders and barriers to
          unleash their true potential. As a pioneering high-risk payment
          processor, our mission is to revolutionize the way high-risk
          industries navigate financial waters.
        </p>
        <p className='text-xl lg:px-32 xl:px-48 sm:px-24 xs:px-auto pt-6 pb-6'>
          With a fusion of cutting-edge technology and unwavering dedication, we
          redefine what&apos;s possible for businesses that dare to dream big in
          unconventional spaces. Our mission is to enable these visionaries to
          thrive, even amidst the complexities and uncertainties that come with
          high-risk endeavors.
        </p>
      </div>
      <div className='relative pb-16 text-justify px-12'>
        <h1 className='bold text-4xl lg:px-32 xl:px-48 sm:px-24 xs:px-auto'>
          OUR COMMITMENT:
        </h1>
        <p className='text-xl lg:px-32 xl:px-48 sm:px-24  pt-6'>
          <b>Unparalleled Expertise:</b> We possess an unrivaled understanding
          of high-risk ecosystems, offering tailor-made solutions that speak to
          the unique needs of each industry we serve.
        </p>
        <p className='text-xl lg:px-32 xl:px-48 sm:px-24 xs:px-auto pt-6'>
          <b>Innovative Security:</b> We lead with innovation to ensure
          transactions are secure, backed by advanced fraud prevention tools
          that safeguard businesses and their customers.
        </p>
        <p className='text-xl lg:px-32 xl:px-48 sm:px-24 xs:px-auto pt-6'>
          <b>Seamless Global Reach:</b> We possess an unrivaled understanding of
          high-risk ecosystems, offering tailor-made solutions that speak to the
          unique needs of each industry we serve.
        </p>
        <p className='text-xl lg:px-32 xl:px-48 sm:px-24 xs:px-auto pt-6'>
          <b>Strategic Growth:</b> We stand as a catalyst for growth, not just
          providing payment processing, but also offering insights and
          strategies that elevate businesses to new heights.
        </p>
        <p className='text-xl lg:px-32 xl:px-48 sm:px-24 xs:px-auto pt-6'>
          <b>Resilient Partnerships:</b> We forge partnerships built on trust
          and collaboration, standing by our partners through challenges and
          triumphs alike.
        </p>
        <p className='text-xl lg:px-32 xl:px-48 sm:px-24 xs:px-auto pt-6'>
          <b>Unparalleled Expertise:</b> We possess an unrivaled understanding
          of high-risk ecosystems, offering tailor-made solutions that speak to
          the unique needs of each industry we serve.
        </p>
        <p className='text-xl lg:px-32 xl:px-48 sm:px-24 xs:px-auto pt-6'>
          <b>Unparalleled Expertise:</b> We possess an unrivaled understanding
          of high-risk ecosystems, offering tailor-made solutions that speak to
          the unique needs of each industry we serve.
        </p>
        <p className='text-center pt-12 text-sm'>
          Welcome to the future of payment processing – welcome to{' '}
          <em>SOLDI</em>.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
