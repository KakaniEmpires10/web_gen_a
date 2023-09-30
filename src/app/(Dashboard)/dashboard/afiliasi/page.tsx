import { Berita, columns } from "./column";
import { Metadata } from "next";
import { DataTableAfiliasi } from "@/components/DashboardComponent/DataTableAfiliasi";

export const metadata: Metadata = {
  title: "Afiliasi"
}

async function getData(): Promise<Berita[]> {
  const res = await fetch(
    "https://64c0ffa6fa35860bae9fc1e3.mockapi.io/api/berita",
    { cache: "no-store" }
  );
  return res.json();
}

const Afiliasi = async () => {
  const data = await getData();

  return (
    <section>
      <DataTableAfiliasi columns={columns} data={data} />
    </section>
  );
};

export default Afiliasi;