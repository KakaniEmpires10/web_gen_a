import { z } from "zod";
import { JabatanAnggota, Pendidikan, kategori, kategoriAnggota, status } from "../EnumValue";

export const BeritaSchema = z.object({
    judul : z.string({required_error : "Judul Harus diisi"}),
    ringkasan : z.string({required_error : "Isi aja dah yang ini"}),
    kategori : z.enum(kategori),
    gambarBerita : z.string().optional(),
    konten : z.string().optional(),
    tanggal : z.date(),
    status : z.enum(status),
    author : z.string({required_error : "Penulis harus diisi"})
})

export const UnggulanSchema = z.object({
    judul : z.string({required_error : "Judul Harus diisi"}),
    ringkasan : z.string({required_error : "Isi aja dah yang ini"}),
    kategori : z.enum(kategori),
    gambarBerita : z.string().optional(),
    konten : z.string().optional(),
    tanggal : z.date(),
    status : z.enum(status),
    author : z.string({required_error : "Penulis harus diisi"})
})

export const KegiatanSchema = z.object({
    judul : z.string({required_error : "Judul Harus diisi"}),
    ringkasan : z.string({required_error : "Isi aja dah yang ini"}),
    kategori : z.enum(kategori),
    gambarBerita : z.string().optional(),
    konten : z.string().optional(),
    tanggal : z.date(),
    status : z.enum(status),
    author : z.string({required_error : "Penulis harus diisi"})
})

export const AnggotaSchema = z.object({
    nama : z.string({required_error : "Nama Harus diisi"}).max(40, {message : "Panjang banget bah namanya, pendekkan !!!"}),
    jabatan : z.enum(JabatanAnggota),
    kategori : z.enum(kategoriAnggota),
    pendidikan : z.enum(Pendidikan),
    bidang : z.string({required_error : "Harus diisi input ini"}),
    ahli : z.string().optional(),
    email: z
      .string()
      .email()
      .refine(
        (val) => val.endsWith("@gmail.com") || val.endsWith("@yahoo.com"),
        {
          message:
            "Emailnya yang bener dong (...@gmail.com) atau (...@yahoo.com)",
        }
      )
      .optional(),
    instagram : z.string().optional(),
    telephon : z.number().optional(),
    gambar : z.string().optional(),
    deskripsi : z.string().optional()
})