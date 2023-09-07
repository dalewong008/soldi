import { Link } from 'react-router-dom';

import Navbar from '../layout/Navbar';
import FooterSmall from '../layout/FooterSmall';

export default function Login() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className='absolute w-full h-full'>
          <div
            className='absolute top-0 w-full h-full bg-gray-900 z-[-10]'
            style={{
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div className='container mx-auto px-4 h-full'>
            <div className='flex content-center items-center justify-center h-full'>
              <div className='w-full lg:w-4/12 px-4'>
                <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0'>
                  <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
                    <div className='text-gray-800 text-center text-xl mt-4 mb-3 font-bold'>
                      Sign In
                    </div>
                    <form>
                      <div className='relative w-full mb-3 z-10'>
                        <label
                          className='block uppercase text-gray-700 text-xs font-bold mb-2'
                          htmlFor='grid-password'
                        >
                          Email
                        </label>
                        <input
                          type='email'
                          className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                          placeholder='Email'
                          style={{ transition: 'all .15s ease' }}
                        />
                      </div>

                      <div className='relative w-full mb-3'>
                        <label
                          className='block uppercase text-gray-700 text-xs font-bold mb-2'
                          htmlFor='grid-password'
                        >
                          Password
                        </label>
                        <input
                          type='password'
                          className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                          placeholder='Password'
                          style={{ transition: 'all .15s ease' }}
                        />
                      </div>
                      <div>
                        <label className='inline-flex items-center cursor-pointer'>
                          <input
                            id='customCheckLogin'
                            type='checkbox'
                            className='form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5'
                            style={{ transition: 'all .15s ease' }}
                          />
                          <span className='ml-2 text-sm font-semibold text-gray-700'>
                            Remember me
                          </span>
                        </label>
                      </div>

                      <div className='text-center mt-6'>
                        <button
                          className='bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full'
                          type='button'
                          style={{ transition: 'all .15s ease' }}
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className='flex flex-wrap mt-6'>
                  <div className='w-1/2'>
                    <a
                      href='#pablo'
                      onClick={(e) => e.preventDefault()}
                      className='text-gray-300'
                    >
                      <small>Forgot password?</small>
                    </a>
                  </div>
                  <div className='w-1/2 text-right'>
                    <Link to='/register' className='text-gray-300 z-10'>
                      <small>Create new account</small>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
