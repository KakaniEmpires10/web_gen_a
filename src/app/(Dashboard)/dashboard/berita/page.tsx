import { DataTablePost } from "@/components/DashboardComponent/DataTablePost";
import { Berita, columns } from "./column";
import { Metadata } from "next";

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
        <DataTablePost columns={columns} data={data} title="berita" description="Berikut daftar Post Berita milik"/>
      </section>
    );
  };
  
  export default Inbox;