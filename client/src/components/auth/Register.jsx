import { Link } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import FooterSmall from '../layout/FooterSmall';

export default function Register() {
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
                      Sign Up
                    </div>
                    <form>
                      <div className='relative w-full mb-3 z-10'>
                        <label
                          className='block uppercase text-gray-700 text-xs font-bold mb-2'
                          htmlFor='name'
                        >
                          Full Name
                        </label>
                        <input
                          type='text'
                          className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                          placeholder='Full Name'
                          style={{ transition: 'all .15s ease' }}
                        />
                      </div>

                      <div className='relative w-full mb-3 z-10'>
                        <label
                          className='block uppercase text-gray-700 text-xs font-bold mb-2'
                          htmlFor='email'
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
                          htmlFor='password'
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

                      <div className='relative w-full mb-3'>
                        <label
                          className='block uppercase text-gray-700 text-xs font-bold mb-2'
                          htmlFor='password2'
                        >
                          Password
                        </label>
                        <input
                          type='password'
                          className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                          placeholder='Confirm Password'
                          style={{ transition: 'all .15s ease' }}
                        />
                      </div>

                      <div className='text-center mt-6'>
                        <button
                          className='bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full'
                          type='button'
                          style={{ transition: 'all .15s ease' }}
                        >
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className='flex flex-wrap mt-6'>
                  <div className='w-full text-right'>
                    <Link to='/login' className='text-gray-300'>
                      <small>Already have an account?</small>
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
