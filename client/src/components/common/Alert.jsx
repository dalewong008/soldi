import { useSelector } from 'react-redux';

const Alert = () => {
  const alerts = useSelector((state) => state.alert);
  if (!alerts) return 0;

  return (
    <div className='alert-wrapper z-10'>
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`alert alert-${alert.alertType} text-gray-800 bg-primary-600`}
        >
          {alert.msg}
        </div>
      ))}
    </div>
  );
};

export default Alert;
