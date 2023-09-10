import { useEffect } from 'react';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import Table from '../common/Table';
import { loadUsers } from '../../actions/user';

const columns = ['Full Name', 'Email', 'Action'];

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.profile);
  let { users } = useSelector((state) => state.users);
  console.log(users);

  useEffect(() => {
    if (user && user.type === 0) {
      dispatch(loadUsers());
    }
  }, [user, dispatch]);

  const userDashboard = () => {
    return (
      <div className='relative pt-32 pb-32'>
        <h1 className='text-4xl mx-32'>Welcome to {user.name}</h1>
      </div>
    );
  };

  const adminDashboard = () => {
    if (!users) users = [];
    return (
      <div className='relative pt-32 pb-32 xl:mx-48 lg:mx-16 sm:mx-4 flex flex-wrap'>
        <h1 className='text-4xl pb-12 pl-4'>Users</h1>
        <Table columns={columns} data={users} />
      </div>
    );
  };

  if (!user) return null;

  return (
    <div>
      <Navbar transparent={false} />
      {user.type === 1 && userDashboard()}
      {user.type === 0 && adminDashboard()}
      <Footer />
    </div>
  );
};

export default Dashboard;
