import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (isAuthenticated) return <Component />;

  return <Navigate to='/' />;
};

export default PrivateRoute;
