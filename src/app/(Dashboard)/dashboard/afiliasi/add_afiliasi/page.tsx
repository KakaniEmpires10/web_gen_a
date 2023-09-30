import ButtonBack from "@/components/ButtonBack"
import FormUnggulan from "@/components/DashboardComponent/form/FormUnggulan"
import { Separator } from "@/components/ui/separator"
import { Metadata } from "next"

export const metadata: Metadata = {
  title : "Tambah Unggulan"
}

const AddUnggulan = () => {
  return (
    <section className="bg-background shadow py-5 px-8 rounded-lg">
    <ButtonBack />
    <div className="py-5">
      <h1 className="text-3xl font-bold mb-4 text-center">Tambah Unggulan</h1>
      <Separator className="mb-6"/>
      <FormUnggulan />
    </div>
    </section>
  )
}

export default AddUnggulan