import { z } from "zod";
import { kategori, status } from "../EnumValue";

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