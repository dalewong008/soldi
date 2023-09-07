import PropTypes from 'prop-types';

const FooterSmall = ({ absolute }) => {
  return (
    <>
      <footer
        className={
          (absolute ? 'absolute w-full bottom-0 bg-gray-900' : 'relative') +
          ' pb-6'
        }
      >
        <div className='container mx-auto px-4'>
          <hr className='mb-6 border-b-1 border-gray-700' />
          <div className='flex flex-wrap items-center md:justify-between justify-center'>
            <div className='w-full px-4 text-center'>
              <div className='text-sm text-white font-semibold py-1'>
                Copyright © {new Date().getFullYear()}{' '}
                <a
                  href='#'
                  className='text-white hover:text-gray-400 text-sm font-semibold py-1'
                >
                  <em>SOLDI</em>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

FooterSmall.propTypes = {
  absolute: PropTypes.bool.isRequired,
};

export default FooterSmall;
