import { columns } from "./column";
import axios from "axios";
import { Metadata } from "next";
import { DataTableUser } from "@/components/DashboardComponent/DataTableUser";
import { getUsers } from "@/lib/Config";

export const metadata: Metadata = {
  title : "Users"
}

// const getUsers = async () : Promise<User[]> => {
//   const { data : res } = await axios.get('https://64dbb997593f57e435b15755.mockapi.io/api/users')
//   return res;
// }

const Users = async() => {
  const data = await getUsers();

  return (
    <section>
      <DataTableUser columns={columns} data={data} />
    </section>
  );
};

export default Users;
