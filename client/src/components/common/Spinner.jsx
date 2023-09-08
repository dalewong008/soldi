import { ClipLoader } from 'react-spinners';
import { useSelector } from 'react-redux';

const Spinner = () => {
  const { loading } = useSelector((state) => state.loading);
  console.log(loading);
  return (
    <div className='w-full h-full z-10 m-0 fixed flex justify-center items-center'>
      <ClipLoader color={'white'} loading={loading} />
    </div>
  );
};

export default Spinner;
