import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';

const Navbar = (props) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  console.log(isAuthenticated);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <nav
      className={
        (props.transparent
          ? 'top-0 absolute z-50 w-full'
          : 'relative bg-white shadow-lg') +
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
            href='/'
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
            (navbarOpen ? ' block rounded shadow-lg bg-gray-400' : ' hidden')
          }
          id='example-navbar-warning'
        >
          {!isAuthenticated ? (
            <div className='flex justify-between w-full'>
              <ul className='flex flex-col lg:flex-row list-none xl:ml-32 lg:ml-32'>
                <li className='flex items-center justify-center'>
                  <Link to='/'>
                    <button
                      className={
                        (props.transparent
                          ? 'text-gray-200 '
                          : 'text-gray-800 ') +
                        'uppercase px-4 py-2 text-auto font-bold'
                      }
                    >
                      Home
                    </button>
                  </Link>
                </li>
                <li className='flex items-center justify-center'>
                  <Link to='/#'>
                    <button
                      className={
                        (props.transparent
                          ? 'text-gray-200 '
                          : 'text-gray-800 ') +
                        'uppercase px-4 py-2 text-auto font-bold'
                      }
                    >
                      About
                    </button>
                  </Link>
                </li>
                <li className='flex items-center justify-center'>
                  <Link to='/#'>
                    <button
                      className={
                        (props.transparent
                          ? 'text-gray-200 '
                          : 'text-gray-800 ') +
                        'uppercase px-4 py-2 text-auto font-bold'
                      }
                    >
                      FAQ
                    </button>
                  </Link>
                </li>
                <li className='flex items-center justify-center'>
                  <Link to='/#'>
                    <button
                      className={
                        (props.transparent
                          ? 'text-gray-200 '
                          : 'text-gray-800 ') +
                        'uppercase px-4 py-2 text-auto font-bold'
                      }
                    >
                      Contact
                    </button>
                  </Link>
                </li>
              </ul>
              <Link
                className={
                  (props.transparent
                    ? 'bg-white text-gray-800 active:bg-gray-100'
                    : 'bg-pink-500 text-white active:bg-pink-600') +
                  ' text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 flex justify-center items-center'
                }
                to='/login'
                type='button'
                style={{ transition: 'all .15s ease' }}
              >
                <i className='fas fa-arrow-alt-circle-right'></i> &nbsp;SignIn
              </Link>
            </div>
          ) : (
            <ul className='flex flex-col lg:flex-row list-none xl:ml-32 lg:ml-32 xl:justify-between w-full'>
              <li className='flex items-center justify-center'>
                <Link to='/dashboard'>
                  <button
                    className={
                      (props.transparent
                        ? 'text-gray-200 '
                        : 'text-gray-800 ') +
                      'uppercase px-4 py-2 text-auto font-bold'
                    }
                  >
                    Dashboard
                  </button>
                </Link>
              </li>

              <li className='flex items-center justify-center lg:ml-auto'>
                <button
                  className={
                    (props.transparent
                      ? 'bg-white text-gray-800 active:bg-gray-100'
                      : 'bg-pink-500 text-white active:bg-pink-600') +
                    ' text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3'
                  }
                  onClick={onLogout}
                  type='button'
                  style={{ transition: 'all .15s ease' }}
                >
                  LogOut&nbsp;
                  <i className='fas fa-arrow-alt-circle-right'></i>
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  transparent: PropTypes.bool.isRequired,
};

export default Navbar;
