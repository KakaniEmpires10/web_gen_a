import { Berita, columns } from "./column";
import { Metadata } from "next";
import { DataTableUnggulan } from "@/components/DashboardComponent/DataTableUnggulan";

export const metadata: Metadata = {
  title : "Unggulan"
}

async function getData(): Promise<Berita[]> {
  const res = await fetch(
    "https://64c0ffa6fa35860bae9fc1e3.mockapi.io/api/berita",
    { cache: "no-store" }
  );
  return res.json();
}

const Unggulan = async() => {
  const data = await getData();

    return (
      <section>
        <DataTableUnggulan columns={columns} data={data} />
      </section>
    );
  };
  
  export default Unggulan;