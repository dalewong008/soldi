/* eslint-disable react/prop-types */
import { deleteUser } from "../../actions/user";
import { useDispatch } from "react-redux";

const Table = ({ columns, data }) => {
  const dispatch = useDispatch();
  const onDelete = (id) => {
    console.log(id);
    dispatch(deleteUser(id));
  };

  const renderColumns = () => (
    <thead>
      <tr>
        {columns.map((item, index) => (
          <th
            key={index}
            className={
              'px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xl border-l-0 border-r-0 whitespace-nowrap font-semibold' +
              (index == 0 && ' text-left')
            }
          >
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );

  const renderData = () => (
    <tbody>
      {data.map((row) => (
        <tr key={row._id}>
          <td
            className={
              'border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left'
            }
          >
            {row.name}
          </td>
          <td
            className={
              'border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center'
            }
          >
            {row.email}
          </td>
          <td
            className={
              'border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center'
            }
          >
            <button
              className='bg-pink-500 px-6 py-2 align-middle whitespace-nowrap rounded-md text-white'
              onClick={() => onDelete(row._id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <div className='block w-full overflow-x-auto'>
      {/* Projects table */}
      <table className='items-center w-full bg-transparent border-collapse'>
        {renderColumns()}
        {renderData()}
      </table>
    </div>
  );
};

export default Table;
