import { FormContact } from "@/components/MainComponent/kontak/FormContact"
import MapAddress from "@/components/MainComponent/kontak/MapAddress"
import { getConfig } from "@/lib/Config"
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontak"
}

const Page = async () => {
  const config = await getConfig();

  return (
    <>
      <section className="h-[70vh] bg-third-gradient text-third-foreground py-10">
        <MapAddress />
      </section>
      <section className="bg-[url(/wavy/haikei/circle-scatter-haikei.svg)] bg-cover">
        <div className="backdrop-blur py-20 px-10">
          <div className="container flex flex-wrap gap-20 bg-white/40 p-10 shadow rounded-xl">
            <div className="grow">
              <FormContact />
            </div>
            <div className="p-2 grow">
              <h4>Hubungin Kami di :</h4>
              <hr className="w-1/2 border border-primary-foreground my-4" />
              <ul className="text-lg space-y-6 list-disc lg:ml-5">
                <li className="list-none lg:-ml-5">Sekretariat kami : <br /> <span className="text-sm">{config?.alamatOrganisasi}</span></li>
                <li>
                  <span className="font-semibold flex items-center"><InstagramIcon className="mr-3" />  Instagram</span>
                  <p className="text-base ml-9">{config?.instagram ? config.instagram : "@Social_media"}</p>
                </li>
                <li>
                  <span className="font-semibold flex items-center"><FacebookIcon className="mr-3" />  Facebook</span>
                  <p className="text-base ml-9">{config?.facebook ? config.facebook : "@Social_media"}</p>
                </li>
                <li>
                  <span className="font-semibold flex items-center"><LinkedinIcon className="mr-3" /> LinkedIn</span>
                  <p className="text-base ml-9">{config?.linkedIn ? config.linkedIn : "@Social_media"}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page