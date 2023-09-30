import AfiliasiSlider from "@/components/MainComponent/Slider/AfiliasiSlider"
import { dataAfiliasi } from "@/components/dataAfiliasi"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Landmark } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Afiliasi"
}

const color = [
  "border-yellow-500",
  "border-cyan-500",
  "border-red-500",
  "border-amber-500",
  "border-blue-500",
  "border-white",
  "border-green-500",
]

const Page = () => {
  return (
    <>
      {/* -------------------------------------------- header section ---------------------------------------------------------- */}
      <section>
        <div className="hidden xl:flex divide-x-2 divide-primary">
          <div className="w-1/4 h-[60vh] bg-slate-900 text-white flex justify-center items-center">1</div>
          <div className="w-1/4 h-[60vh] bg-slate-900 text-white flex justify-center items-center">2</div>
          <div className="w-1/4 h-[60vh] bg-slate-900 text-white flex justify-center items-center">3</div>
          <div className="w-1/4 h-[60vh] bg-slate-900 text-white flex justify-center items-center">4</div>
        </div>
        <div className="xl:hidden">
          <AfiliasiSlider />
        </div>
        <div className="h-full py-4 space-y-3 border-b-4 border-b-primary rounded-b-xl text-center">
          <div className="container xl:px-0 px-10">
            <h3>Afiliasi</h3>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quo praesentium nostrum eum voluptates reiciendis porro sunt, vero est. Voluptate beatae ad explicabo, a dolor non quis quibusdam maxime pariatur!</p>
          </div>
        </div>
      </section>

      {/* -------------------------------------------- deskripsi section --------------------------------------------------------- */}
      <section>
        <div className="container xl:px-0 px-10 flex flex-wrap items-center justify-between py-20 gap-10">
          <div className="space-y-5 lg:w-1/2 w-full">
            <h3>Tentang Afiliasi</h3>
            <hr className="border border-third w-2/6" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aut voluptatem itaque corporis. Optio laboriosam odit quidem provident, quisquam aperiam corrupti consequuntur. Blanditiis quas vero, vitae modi quae quo quos non impedit ab voluptates deleniti. Illum ab aperiam eligendi reiciendis expedita debitis eum tenetur consequatur, adipisci odit, esse soluta dolor, nulla sunt quos. Iure tenetur quaerat reprehenderit nobis itaque animi!</p>
          </div>
          <div className="lg:w-1/3 w-full flex justify-center">
            <Image src="/wavy/green4.png" alt="blob" width={250} height={250} />
          </div>
        </div>
      </section>
      <section className="py-10 xl:px-0 px-10 container">
        <h3>Afiliasi Kami</h3>
        <hr className="border border-third w-3/12 my-4" />
        <div className="flex flex-col gap-10 my-10">
          { dataAfiliasi.map(data => {
              return (
                <div key={data.title} className={cn("shadow max-h-fit rounded-lg flex flex-col items-center text-center md:text-left md:flex-row", data.color && "")}>
                  <Image className={`p-8 border-2 ${data.color == "white" ? "border-white" : `border-${data.color}-500`} rounded-[15px]`} src={data.logo} alt="logo" width={200} height={40} />
                  <div className="py-5 mx-5 space-y-4">
                    <h4 className="text-md text-cy font-semibold">{data.title}</h4>
                    <p>{data.desc}</p>
                    {/* <Button asChild variant="secondary">
                      <Link href={data.url}>Lihat Selengkapnya <Landmark className="w-5 h-5 ml-2" /></Link>
                    </Button> */}
                  </div>
                </div>
              )
            }
          )}
        </div>
      </section>
      {/* <div className="relative">
          <Image src="/background/background-fluid/bottom-4" alt="bg" fill />
      </div> */}
    </>
  )
}

export default Page