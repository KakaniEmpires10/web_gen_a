import HeroSlider from "@/components/MainComponent/Slider/HeroSlider"
import SuhuSlider from "@/components/MainComponent/Slider/SuhuSlider"
import { dataAfiliasi } from "@/components/dataAfiliasi"
import { Button } from "@/components/ui/button"
import { GiSupersonicArrow } from "react-icons/gi"
import Image from "next/image"
import Link from "next/link"
import CardBerita from "@/components/MainComponent/Card/CardBerita"

const Page = () => {
  return (
    <>
      <section>
        <HeroSlider />
      </section>

      {/* ------------------------------------------ logo section ------------------------------------------------------- */}
      <div className="p-5 flex overflow-y-auto gap-10 border-b-2 border-b-primary justify-evenly bg-white">
        {
          dataAfiliasi.map(item => (
            <Image key={item.title} src={item.logo} alt="logo" width={60} height={60} />
          ))
        }
      </div>

      {/* --------------------------------------------- Tentang Section ---------------------------------------------------- */}
      <section className="relative">
        <div className="container flex flex-wrap items-center justify-between py-20 gap-10">
          <div className="space-y-5 lg:w-1/2 w-full">
            <h3>Tentang Kami</h3>
            <hr className="border border-third w-2/6" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aut voluptatem itaque corporis. Optio laboriosam odit quidem provident, quisquam aperiam corrupti consequuntur. Blanditiis quas vero, vitae modi quae quo quos non impedit ab voluptates deleniti. Illum ab aperiam eligendi reiciendis expedita debitis eum tenetur consequatur, adipisci odit, esse soluta dolor, nulla sunt quos. Iure tenetur quaerat reprehenderit nobis itaque animi!</p>
            <Button asChild><Link href="/about_us">More About us <GiSupersonicArrow className="ml-3" /></Link></Button>
          </div>
          <div className="lg:w-1/3 w-full flex justify-center">
            <Image src="/wavy/green4.png" alt="blob" width={250} height={250} />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------- Suhu Section ------------------------------------------------------ */}
      <section className="p-[5%]">
        <h3 className="text-center">
          Suhu
        </h3>
        <hr className="mt-7 mb-20 border border-black rounded-xl w-1/12 m-auto" />
        <SuhuSlider />
        <Button asChild><Link className="my-10 self-center" href="/about">Lihat Selengkapnya</Link></Button>
      </section>

      {/* ---------------------------------------------- Berita Section ---------------------------------------------------- */}
      <section>
        <div className="container py-12 space-y-7">
          <h3 className="text-center">Berita</h3>
          <hr className="border border-third w-[10%] mx-auto" />
          <div className="flex flex-wrap gap-5 justify-center py-7">
            <CardBerita />
            <CardBerita />
            <CardBerita />
          </div>
        </div>
      </section>
    </>
  )
}

export default Page