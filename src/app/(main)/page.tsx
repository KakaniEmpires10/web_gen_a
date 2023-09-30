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
      <div className="p-5 flex overflow-y-auto gap-10 border-b-2 border-b-primary md:justify-evenly bg-white">
        {
          dataAfiliasi.map(item => (
            <Image key={item.title} src={item.logo} alt="logo" width={60} height={60} />
          ))
        }
      </div>

      {/* --------------------------------------------- Tentang Section ---------------------------------------------------- */}
      <section className="relative bg-[url(/wavy/haikei/wave-haikei-orange.svg)] bg-opacity-5 bg-cover bg-bottom">
        <div className="flex flex-wrap items-center p-32 pb-64 gap-10">
          <div className="space-y-5 xl:w-1/2 w-full">
            <h3>Siapa Kami?</h3>
            <hr className="border border-third w-2/6" />
            <p><span className="font-semibold">Generasi Edukasi Nanggroe Aceh Darussalam (GEN-A)</span> adalah Lembaga Swadaya Masyarakat yang digagas sebagai bentuk kepedulian dan keinginan kuat untuk menjadi <span className="font-semibold">Katalisator</span> bagi pembangunan karakter <span className="font-semibold">Generasi Unggul Aceh</span> melalui <span className="font-semibold">Pengabdian Masyarakat, Pelatihan dan Penelitian</span></p>
            <Button asChild><Link href="/about_us">More About us <GiSupersonicArrow className="ml-3" /></Link></Button>
          </div>
          <div className="relative xl:w-1/3 w-full h-full flex justify-center flex-grow">
            <div className="group bg-secondary-gradient shadow shadow-secondary hover:shadow-lg xl:hover:rotate-6 transition-all duration-300">
              <div className="bg-primary-gradient shadow shadow-primary group-hover:shadow-lg group-hover:rotate-0 transition-all duration-300">
                <video className="rounded-lg xl:-rotate-3 z-10 shadow group-hover:shadow-md group-hover:shadow-primary xl:group-hover:-rotate-12 transition-all duration-300" autoPlay muted loop controls>
                  <source src="/Gen_ Intro.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------- Suhu Section ------------------------------------------------------ */}
      {/* <section className="p-[5%]">
        <h3 className="text-center">
          Suhu
        </h3>
        <hr className="mt-7 mb-20 border border-black rounded-xl w-1/12 m-auto" />
        <SuhuSlider />
        <Button asChild><Link className="my-10 self-center" href="/about">Lihat Selengkapnya</Link></Button>
      </section> */}

      {/* ---------------------------------------------- Berita Section ----------------------------------------------------
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
      </section> */}
    </>
  )
}

export default Page