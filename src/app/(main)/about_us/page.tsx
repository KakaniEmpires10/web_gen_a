import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowBigRightDash } from "lucide-react";
import { GrContactInfo } from 'react-icons/gr';
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { dataAfiliasi } from "@/components/dataAfiliasi";
import { dataKegiatan } from "@/components/dataKegiatan";
import { dataUnggulan } from "@/components/dataUnggulan";

export const metadata: Metadata = {
  title: "Tentang Kami"
}

const Page = () => {
  return (
    <>

      {/* ------------------------------------------  About Us Description --------------------------------------------------- */}
      <section>
        <div className="bg-primary text-primary-foreground">
          <div className="flex justify-between flex-wrap">
            <div className="space-y-5 px-20 py-20 lg:py-0 flex flex-col justify-center lg:w-[45%]">
              <h3 className="text-3xl font-bold">siapa kami ?</h3>
              <hr className="w-3/6 border border-black" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur nemo ipsa minima in sed sequi fugiat quam? Similique harum ducimus, non doloribus omnis vitae, ratione cupiditate sequi architecto voluptatum ipsa nam cum veritatis, dignissimos accusantium eligendi? Debitis veniam, blanditiis sequi ea quae eius eveniet quia perferendis, possimus asperiores quibusdam? Sapiente ducimus
              </p>
              <Button className="hover:bg-gray-900/80 w-fit" asChild variant="third"><Link href="/contact_us"><GrContactInfo className="mr-3 w-6 h-6 text-white" />Hubungi Kami</Link></Button>
            </div>
            <div className="relative w-full h-[50vh] lg:w-[55%] lg:skew-x-12 lg:translate-x-20">
              <Image className="object-cover" src="https://picsum.photos/200/300?grayscale" alt="picture" fill />
            </div>
          </div>
        </div>
        <div className="bg-third text-third-foreground">
          <div className="flex justify-between flex-wrap flex-col-reverse lg:flex-row">
            <div className="relative w-full h-[50vh] lg:w-[55%] lg:-skew-x-12 lg:-translate-x-20">
              <Image className="object-cover" src="https://picsum.photos/200/300?grayscale" alt="picture" fill />
            </div>
            <div className="space-y-5 px-20 py-20 lg:py-0 flex flex-col justify-center lg:w-[45%]">
              <h3 className="text-3xl font-bold">Sejarah kami</h3>
              <hr className="w-3/6 border border-third-foreground" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur nemo ipsa minima in sed sequi fugiat quam? Similique harum ducimus, non doloribus omnis vitae, ratione cupiditate sequi architecto voluptatum ipsa nam cum veritatis, dignissimos accusantium eligendi? Debitis veniam, blanditiis sequi ea quae eius eveniet quia perferendis, possimus asperiores quibusdam? Sapiente ducimus officiis eveniet illum reprehenderit!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------  Visi, Misi Section ---------------------------------------------------- */}
      <section className="relative">
        <Image className="scale-105 w-full absolute -z-40" src="/background/background-fluid/bg-3_1.png" alt="background" width={1280} height={1080} />
        <div className="pb-14 pt-44 px-14 lg:w-3/4">
          <div className="space-y-7">
            <div className="space-y-3">
              <h3>Visi</h3>
              <hr className="w-8 border border-black" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure amet animi eum harum vero vel commodi quaerat odio? Doloribus, perferendis quaerat vitae voluptas beatae quidem eius nostrum ratione esse, magnam numquam exercitationem explicabo blanditiis, ipsam in. Sit fuga magni expedita omnis excepturi sint enim voluptatum quaerat, quod facilis nam dolorem.
              </p>
            </div>
            <div className="space-y-3">
              <h3>Misi</h3>
              <hr className="w-8 border border-black" />
              <ol className="list-decimal list-outside ml-3 space-y-3">
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sit harum fugiat perspiciatis nobis sunt maiores eos. Delectus, illo voluptate.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sit harum fugiat perspiciatis nobis sunt maiores eos. Delectus, illo voluptate.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sit harum fugiat perspiciatis nobis sunt maiores eos. Delectus, illo voluptate.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sit harum fugiat perspiciatis nobis sunt maiores eos. Delectus, illo voluptate.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sit harum fugiat perspiciatis nobis sunt maiores eos. Delectus, illo voluptate.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sit harum fugiat perspiciatis nobis sunt maiores eos. Delectus, illo voluptate.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sit harum fugiat perspiciatis nobis sunt maiores eos. Delectus, illo voluptate.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------- Tujuan Section ------------------------------------------------------------ */}
      <section className="relative">
        <Image className="absolute -z-40 w-full" src="/background/background-head-diamond/bg-2.png" alt="background" width={1280} height={1080} />
        <div className="container pb-20 pt-80">
          <div className="space-y-5">
            <h3 className="text-center">Tujuan Kami</h3>
            <hr className="w-8 border border-black mx-auto" />
            <ul className="list-decimal list-inside space-y-6 text-md text-center">
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, iure.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, atque!</li>
              <li>Illo adipisci incidunt ex fugit ut tempore eius aperiam esse.</li>
              <li>Modi, inventore sint perferendis eveniet eum iure! Iusto, sapiente minima?</li>
              <li>Dolore odit, molestias harum qui a dolores repellat numquam totam?</li>
              <li>Beatae aspernatur sit ut unde explicabo in, nesciunt molestias vitae?</li>
            </ul>
          </div>
        </div>
      </section>

      <Separator className="my-32" />

      {/* ---------------------------------------- afiliasi singkat ----------------------------------------------------------------- */}

      <section className="pb-32 bg-[url('/background/background-fluid/bottom-2_1.png')] object-bottom">
        {/* <Image className="absolute bottom-0 left-0 w-full -z-40" src="/background/background-fluid/bottom-2_1.png" alt="background" width={1280} height={1080} /> */}
        <div className="container bg-white/80 rounded-2xl shadow py-20 px-14 mx-auto border-x-4 border-x-primary">
          <h3 className="text-center">Afiliasi Kami</h3>
          <hr className="mx-auto w-3/6 my-10 border-black" />
          <div className="my-5 px-5 flex flex-wrap justify-center gap-10">
            {dataAfiliasi.map(afiliasi => (
              <Card className="border-y-4 border-y-third w-[15rem] text-center" key={afiliasi.title}>
                <CardHeader>
                  <div className="relative w-20 h-20 hover:drop-shadow-lg hover:drop-shadow-third duration-200 rounded-full p-4 self-center">
                    <Image className="object-contain" src={afiliasi.logo} alt="logo-afiliasi" fill />
                  </div>
                </CardHeader>
                <CardContent>
                  <span className="text-base font-semibold">{afiliasi.title}</span>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button asChild className="inline-flex md:self-end self-center mt-14" variant="outline">
            <Link href="/afiliasi">
              Lebih Lanjut <ArrowBigRightDash className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ------------------------------------------ unggulan & Kegiatan --------------------------------------------------------- */}
      <section className="pb-32 flex flex-wrap lg:flex-nowrap gap-5 mx-20">
        <div className="bg-white/80 rounded-2xl shadow py-20 px-14 border-y-4 border-y-primary">
          <h3>Kegiatan Kami</h3>
          <hr className="w-3/6 my-10 border-black" />
          <div className="my-5 px-5 flex flex-col gap-8">
            {dataKegiatan.map(kegiatan => (
              <div key={kegiatan.title} className="pr-5 py-2 shadow border-r-2 border-r-primary w-full flex items-center rounded-lg">
                <Image src={kegiatan.image} alt="gambar" width={200} height={200} />
                <div className="mb-2">
                  <h4 className="font-semibold">
                    {kegiatan.title}
                  </h4>
                  <p>{kegiatan.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/80 rounded-2xl shadow py-20 px-14 border-y-4 border-y-primary">
          <h3>Unggulan Kami</h3>
          <hr className="w-3/6 my-8 border-black" />
          <div className="my-5 px-5 flex flex-col gap-10">
            {dataUnggulan.map(unggulan => (
              <div key={unggulan.title} className="pr-5 py-2 shadow border-r-2 border-r-primary w-full flex items-center rounded-lg">
                <Image src={unggulan.image} alt="gambar" width={200} height={200} />
                <div className="mb-2">
                  <h4 className="font-semibold">
                    {unggulan.title}
                  </h4>
                  <p>{unggulan.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
