import { FormContact } from "@/components/MainComponent/kontak/FormContact"
import MapAddress from "@/components/MainComponent/kontak/MapAddress"
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Kontak"
}

const Page = () => {
  return (
    <>
      <section className="h-[50vh] bg-secondary text-secondary-foreground flex justify-around items-center py-10">
        <div className="px-10 space-y-6">
          <div>
            <h4>Address :</h4>
            <p>Jln. Tgk. Lam U No.6, Kota Baru, Kec. Kuta Alam, Kota Banda Aceh, Aceh 23125</p>
          </div>
          <div>
            <h4>Address :</h4>
            <p>Jln. Tgk. Lam U No.6, Kota Baru, Kec. Kuta Alam, Kota Banda Aceh, Aceh 23125</p>
          </div>
          <div>
            <h4>Address :</h4>
            <p>Jln. Tgk. Lam U No.6, Kota Baru, Kec. Kuta Alam, Kota Banda Aceh, Aceh 23125</p>
          </div>
        </div>
        <Image className="hidden md:block" src="/icon/data-analysis.svg" alt="" width={400} height={50} />
      </section>
      <section className="h-[50vh] bg-third text-third-foreground py-10">
        <MapAddress />
      </section>
      <section className="container py-20">
        <div className="flex flex-wrap gap-20">
          <div className="grow">
            <FormContact />
          </div>
          <div className="p-7 grow">
            <h4>Hubungin Kami di :</h4>
            <hr className="w-1/2 border border-primary-foreground my-4" />
            <ul className="text-lg space-y-6 list-disc lg:ml-5">
              <li className="list-none lg:-ml-5">Sekretariat kami (alamat tertera di atas)</li>
              <li>
                <span className="font-semibold flex items-center"><InstagramIcon  className="mr-3" />  Instagram</span>
                <p className="text-base ml-9">@contoh</p>
              </li>
              <li>
                <span className="font-semibold flex items-center"><FacebookIcon className="mr-3" />  Facebook</span>
                <p className="text-base ml-9">@contoh</p>
              </li>
              <li>
                <span className="font-semibold flex items-center"><LinkedinIcon className="mr-3" /> LinkedIn</span>
                <p className="text-base ml-9">@contoh</p>
              </li>
              <li>
                <span className="font-semibold flex items-center"><TwitterIcon  className="mr-3" /> Twitter</span>
                <p className="text-base ml-9">@contoh</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page