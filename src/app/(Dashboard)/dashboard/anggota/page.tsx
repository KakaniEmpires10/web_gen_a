import { DataTableAnggota } from "@/components/DashboardComponent/DataTableAnggota";
import { Pegawai, columns } from "./column";
import axios from "axios";
import { Metadata } from "next";

export const metadata: Metadata = {
  title : "Anggota"
}

const getAnggota = async () : Promise<Pegawai[]> => {
  const { data : res } = await axios.get('https://64c0ffa6fa35860bae9fc1e3.mockapi.io/api/user')
  return res;
}


const Users = async() => {
  const data = await getAnggota();

  return (
    <section>
      <DataTableAnggota columns={columns} data={data} />
    </section>
  );
};

export default Users;
