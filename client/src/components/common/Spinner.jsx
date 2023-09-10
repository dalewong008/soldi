import { RingLoader } from 'react-spinners';
import { useSelector } from 'react-redux';

const Spinner = () => {
  const { loading } = useSelector((state) => state.loading);

  if (!loading) return null;
  return (
    <div className='w-full h-full z-20 m-0 fixed flex justify-center items-center'>
      <RingLoader color={'DarkCyan'} loading={loading} />
    </div>
  );
};

export default Spinner;
