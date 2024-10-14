import { useGetUsersQuery } from '../redux/usersSlice';
import Loader from '../components/Loader';
import Table from '../components/Table';


const UsersPage: React.FC = () => {
  const { data, error, isLoading } = useGetUsersQuery();

  return (
  <section>
    <div className="p-4">
      {error ? (
        <p className="font-weight-bold fs-3 font-weight-bold">Ups, something went wrong</p>
      ) : isLoading ? (
        <Loader/>
      ) : data ? (
        <Table users={data}/>
      ) : null}
      </div>
  </section>
     
  )
}

export default UsersPage
