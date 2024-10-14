import {TableProps, User} from '../types';

const Table: React.FC<TableProps> = ({ users }) => {

    const handleCellClick = (user: User) => {
        console.log(user);
      };

  return (
    <div className="table-responsive">
    <table className="table table-striped">
       <thead>
            <tr>
                <th className="table-head" scope="col">Name</th>
                <th className="table-head" scope="col">Email</th>
                <th className="table-head" scope="col">Phone</th>
                <th className="table-head" scope="col">Address</th>
            </tr>
    </thead>
    <tbody>
    {users?.map((user) => {
            return (
              <tr key={user.id} id={user.id} className="table-row" onClick={() => handleCellClick(user)}>
              <td className="table-cell">{user.name}</td>
              <td className="table-cell">{user.email}</td>
              <td className="table-cell">{user.phone}</td>
              <td className="table-cell">{user.address.city}</td>
              </tr>
            )
          })}
    </tbody>
    </table>
    </div>
  )
}

export default Table;
