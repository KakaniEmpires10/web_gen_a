import { Berita, columns } from "./column";
import { Metadata } from "next";
import { DataTableBerita } from "@/components/DashboardComponent/DataTableBerita";

export const metadata: Metadata = {
  title : "Berita"
}

async function getData(): Promise<Berita[]> {
  const res = await fetch(
    "https://64c0ffa6fa35860bae9fc1e3.mockapi.io/api/berita",
    { cache: "no-store" }
  );
  return res.json();
}

const Inbox = async() => {
    const data = await getData();
    
    return (
      <section>
        <DataTableBerita columns={columns} data={data} />
      </section>
    );
  };
  
  export default Inbox;