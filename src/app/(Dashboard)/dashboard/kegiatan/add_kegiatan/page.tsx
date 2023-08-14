import ButtonBack from "@/components/ButtonBack"
import FormKegiatan from "@/components/DashboardComponent/form/FormKegiatan"
import { Separator } from "@/components/ui/separator"

const AddKegiatan = () => {
  return (
    <section className="bg-background shadow py-5 px-8 rounded-lg">
    <ButtonBack />
    <div className="py-5">
      <h1 className="text-3xl font-bold mb-4 text-center">Tambah Kegiatan</h1>
      <Separator className="mb-6"/>
      <FormKegiatan />
    </div>
    </section>
  )
}

export default AddKegiatan