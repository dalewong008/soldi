import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { user } = useSelector((state) => state.profile);

  if (!user) return null;

  return (
    <>
      <Navbar />
      <main>
        <div className='relative pt-32 pb-32'>
          <h1 className='text-4xl mx-32'>Welcome to {user.name}</h1>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
