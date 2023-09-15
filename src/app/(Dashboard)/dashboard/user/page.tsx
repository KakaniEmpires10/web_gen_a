import { User, columns } from "./column";
import axios from "axios";
import { Metadata } from "next";
import { DataTableUser } from "@/components/DashboardComponent/DataTableUser";

export const metadata: Metadata = {
  title : "Users"
}

const getUsers = async () : Promise<User[]> => {
  const { data : res } = await axios.get('https://64dbb997593f57e435b15755.mockapi.io/api/users')
  return res;
}


const Users = async() => {
  const data = await getUsers();

  return (
    <section>
      <DataTableUser columns={columns} data={data}  title="user" />
    </section>
  );
};

export default Users;
