import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowBigRightDash, MessagesSquareIcon } from "lucide-react";
import { GrContactInfo } from 'react-icons/gr';
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { dataAfiliasi } from "@/components/dataAfiliasi";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getConfig } from "@/lib/Config";
import React from 'react';

export const metadata: Metadata = {
  title: "Tentang Kami"
}

const Page = async () => {
  const config = await getConfig()

  return (
    <>
      {/* ------------------------------------------  About Us Description --------------------------------------------------- */}
      <section>
        <div className="bg-primary-gradient text-primary-foreground">
          <div className="flex justify-between flex-wrap">
            <div className="space-y-5 px-20 py-20 lg:py-0 flex flex-col justify-center lg:w-[45%]">
              <h3 className="text-3xl font-bold">siapa kami ?</h3>
              <hr className="w-3/6 border border-black" />
              <div dangerouslySetInnerHTML={{ __html: config?.deskripsiOrganisasi}}></div>
              <Button className="hover:bg-gray-900/80 w-fit" asChild variant="third"><Link href="/contact_us"><MessagesSquareIcon className="w-5 h-5 mr-3 text-white" />Hubungi Kami</Link></Button>
            </div>
            <div className="relative w-full h-[50vh] lg:w-[55%] lg:skew-x-12 lg:translate-x-20">
              <Image className="object-cover" src="https://picsum.photos/200/300?grayscale" alt="picture" fill />
            </div>
          </div>
        </div>
        <div className="bg-third-gradient text-third-foreground">
          <div className="flex justify-between flex-wrap flex-col-reverse lg:flex-row">
            <div className="relative w-full h-[50vh] lg:w-[55%] lg:-skew-x-12 lg:-translate-x-20">
              <Image className="object-cover" src="https://picsum.photos/200/300?grayscale" alt="picture" fill />
            </div>
            <div className="space-y-5 px-20 py-20 lg:py-0 flex flex-col justify-center lg:w-[45%]">
              <h3 className="text-3xl font-bold">Sejarah kami</h3>
              <hr className="w-3/6 border border-third-foreground" />
              <p>
                GEN-A didirikan pada tanggal <span className="font-semibold">30 April 2017</span> di <span className="font-semibold">Kota Banda Aceh</span> dan secara resmi terdaftar di Kementrian Dalam Negeri Pada tahun 2020 dengan nomor <span className="font-semibold">0113-00-00/004/I/2020</span> <br />
                GEN-A bersifat <span className="font-semibold">independen, non-politik, dan non-partisan</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------  Visi, Misi Section ---------------------------------------------------- */}
      <section>
        <div className="flex items-center gap-10 w-full h-full">
          <div className="hidden lg:block lg:w-1/3 h-full">
            <div className="relative px-14 py-96 bg-third-gradient w-1/2 h-full">
            </div>
          </div>
          <div className="space-y-7 p-10">
            <div className="space-y-3">
              <h3>Visi & Misi</h3>
              <hr className="w-8 border border-black" />
              <ol className="list-decimal list-outside ml-3 space-y-3 lg:pl-1">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="1">
                    <li>
                      Meningkatkan kepedulian generasi lintas usia dan multidisiplin dalam bersinergi mengoptimalkan kualitas hidup <br />
                      <AccordionTrigger className="lg:px-5">
                        <span className="text-sm">Plan 0f Action (POA)</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-5">
                        <ul className="list-item list-outside space-y-3">
                          <li>Membentuk tim staf ahli</li>
                          <li>Membentuk sub-unit berdasarkan fokus kerja</li>
                          <li>Mencantumkan gelar/latar belakang pendidikan dalam publikasi anggota GEN-A</li>
                          <li>Melaksanakan diskusi dan program lintas disiplin</li>
                        </ul>
                      </AccordionContent>
                    </li>
                  </AccordionItem>
                  <AccordionItem value="2">
                    <li>
                      Menemukan evidance-based solution yang memberikan hasil yang berkelanjutan (sustainable outcome) bagi masalah generasi muda <br />
                      <AccordionTrigger className="lg:px-5">
                        <span className="text-sm">Plan 0f Action (POA)</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-5">
                        <ul className="list-item list-outside space-y-3">
                          <li>Menerapkan problem-based program dan kajian dalam pembuatan concept note program</li>
                          <li>Menerapkan research-based program terutama dalam pelaporan kegiatan (Poster dan Artikel ilmiah popular)</li>
                          <li>Mendorong SDM GEN-A untuk menulis artikel, buku, dan petunjuk teknis</li>
                        </ul>
                      </AccordionContent>
                    </li>
                  </AccordionItem>
                  <AccordionItem value="3">
                    <li>
                      Menjamin masa tumbuh kembang generasi muda yang bebas dari dampak negatif melalui law enforcement dan kemitraan lintas sektoral<br />
                      <AccordionTrigger className="lg:px-5">
                        <span className="text-sm">Plan 0f Action (POA)</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-5">
                        <ul className="list-item list-outside space-y-3">
                          <li>Memfokuskan program kolaborasi lintas organisasi</li>
                          <li>Melibatkan perwakilan organisasi pemuda dan ormawa dalam program pelatihan GEN-A</li>
                          <li>Melakukan kajian dan melakukan advokasi ke lembaga pemerintah atau membuat Pernyataan Sikap</li>
                          <li>Melakukan audiensi kepada lembaga pemerintahan terkait untuk melaporkan hasil kajian dan pelaksaan program di Masyarakat</li>
                        </ul>
                      </AccordionContent>
                    </li>
                  </AccordionItem>
                  <AccordionItem value="4">
                    <li>
                      Melakukan pendekatan pemberdayaan masyarakat untuk mengatasi masalah generasi muda <br />
                      <AccordionTrigger className="lg:px-5">
                        <span className="text-sm">Plan 0f Action (POA)</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-5">
                        <ul className="list-item list-outside space-y-3">
                          <li>Melaksanaan pelatihan berbasi pemikiran dan keterampilan sesuai minat bakat</li>
                          <li>Melaksanaan program mentoring berjenjang baik di internal GEN-A maupun kepada mitra Masyarakat</li>
                        </ul>
                      </AccordionContent>
                    </li>
                  </AccordionItem>
                  <AccordionItem value="5">
                    <li>
                      Menjalankan program capacity building untuk mewujudkan generasi unggul<br />
                      <AccordionTrigger className="lg:px-5">
                        <span className="text-sm">Plan 0f Action (POA)</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-5">
                        <ul className="list-item list-outside space-y-3">
                          <li>Menyusun kurikulum pelatihan sesuai perkembangan zaman</li>
                          <li>Melakukan Training New Trainer (TNT) dan Training of Communicator (ToC)</li>
                          <li>Melakukan pelatihan capacity building kepada pengurus organisasi pemuda/ormawa/ dan Siswa SD/SMP/SMA sederajat</li>
                        </ul>
                      </AccordionContent>
                    </li>
                  </AccordionItem>
                  <AccordionItem value="6">
                    <li>
                      Menjadi role model untuk program pemberdayaan generasi muda (youth empowerment) seluruh Indonesia<br />
                      <AccordionTrigger className="lg:px-5">
                        <span className="text-sm">Plan 0f Action (POA)</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-5">
                        <ul className="list-item list-outside space-y-3">
                          <li>Mempromosikan konsep kegiatan GEN-A melalui poster publikasi ilmiah</li>
                          <li>Mempromosikan SDM GEN-A agar dapat diundang sebagai narasumber</li>
                          <li>Melakukan kunjungan kerja dan pelatihan kepada organisasi pemuda</li>
                        </ul>
                      </AccordionContent>
                    </li>
                  </AccordionItem>
                </Accordion>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <Separator className="mr-auto" />

      {/* ------------------------------------------------------- Visi tahun ini ------------------------------------------------------------------------------- */}

      <section className="flex py-10 gap-10 items-center w-full h-full">
        <div className="space-y-3 lg:mx-24 mx-10">
          <h3>Visi 2023/2024</h3>
          <hr className="w-20 border border-black" />
          <div>
            <p>GEN-A menjadi katalisator generasi unggul yang <span className="font-semibold">terkemuka, mandiri, berwawasan global, inovatif,</span> dan <span className="font-semibold">aktif</span> dalam mengembangkan <span><em>evidence-based solution</em></span> atas permasalahan di masyarakat</p>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/3">
          <div className="px-14 py-80 ml-auto bg-secondary-gradient w-1/2"></div>
        </div>
      </section>

      <Separator className="bg-secondary-gradient w-full" />

      {/* ---------------------------------------- afiliasi singkat ----------------------------------------------------------------- */}

      <section className="py-36 px-20 bg-[url(/wavy/haikei/circle-scatter-haikei.svg)] bg-cover">
        <div className="mt-20 w-full">
          <h3 className="text-center">Afiliasi Kami</h3>
          <hr className="mx-auto w-3/6 my-10 border-black" />
          <div className="my-5 px-5 flex flex-wrap justify-center gap-10">
            {dataAfiliasi.map(afiliasi => (
              <Card className="border-y-4 border-y-primary w-[15rem] text-center hover:-translate-y-5 transition-all duration-300" key={afiliasi.title}>
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
          <div className="w-full">
            <Button asChild className="mt-14 mx-auto block max-w-[160px]">
              <Link className="flex" href="/afiliasi">
                Lebih Lanjut <ArrowBigRightDash className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
