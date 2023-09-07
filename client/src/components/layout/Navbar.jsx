import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  console.log(props.transparent);
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav
      className={
        (props.transparent
          ? 'top-0 absolute z-50 w-full'
          : 'relative shadow-lg bg-white shadow-lg') +
        ' flex flex-wrap items-center justify-between px-2 py-3 '
      }
    >
      <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <a
            className={
              (props.transparent ? 'text-white' : 'text-gray-800') +
              ' text-4xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'
            }
            href='#'
          >
            SOLDI
          </a>
          <button
            className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
            type='button'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (props.transparent ? 'text-white' : 'text-gray-800') +
                ' fas fa-bars'
              }
            ></i>
          </button>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' +
            (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
          }
          id='example-navbar-warning'
        >
          <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
            <li className='flex items-center'>
              <button
                className={
                  (props.transparent
                    ? 'bg-white text-gray-800 active:bg-gray-100'
                    : 'bg-pink-500 text-white active:bg-pink-600') +
                  ' text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3'
                }
                type='button'
                style={{ transition: 'all .15s ease' }}
              >
                <i className='fas fa-arrow-alt-circle-down'></i> SignIn
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  transparent: PropTypes.bool.isRequired,
};

export default Navbar;
