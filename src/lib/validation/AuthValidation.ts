import { z } from "zod";
import { Role } from "../EnumValue";

export const LoginSchema = z.object({
  userName: z.string().min(1, { message: "Harus isi username" }),
  password: z.string().min(1, { message: "Harus isi password" }),
});

export const RegisterSchema = z.object({
  nama: z.string({ required_error: "Harus masukkan nama lengkap" }),
  username: z
    .string({ required_error: "Harus masukkan nama panggilan" })
    .max(25, {
      message: "panjang banget panggilanmu bahh, pendekkan lagi!!",
    }),
  email: z
    .string()
    .email()
    .refine((val) => val.endsWith("@gmail.com") || val.endsWith("@yahoo.com"), {
      message: "Emailnya yang bener dong (...@gmail.com) atau (...@yahoo.com)",
    })
    .optional(),
  password: z
    .string({ required_error: "Password harus diisi" })
    .min(3, { message: "sikit banget bahh, jangan kurang dari 3 karakter" })
    .regex(/^(?=.*[A-Z])(?=.*\d)/, {
      message:
        "Password harus setidaknya memiliki satu huruf kapital dan satu angka",
    }),
  profil: z.string().optional(),
  role: z.enum(Role)
});

export const EmailSchema = z.object({
  email: z
    .string({ required_error: "email harus diisi" })
    .email()
    .refine((val) => val.endsWith("@gmail.com") || val.endsWith("@yahoo.com"), {
      message: "Emailnya yang bener dong (...@gmail.com) atau (...@yahoo.com)",
    }),
});

export const NewPasswordSchema = z
  .object({
    newPassword: z
      .string({ required_error: "Harus diisi !!" })
      .min(3, { message: "sikit banget bahh, jangan kurang dari 3 karakter" })
      .regex(/^(?=.*[A-Z])(?=.*\d)/, {
        message:
          "Password harus setidaknya memiliki satu huruf kapital dan satu angka",
      }),
    confirmPassword: z.string({ required_error: "harus diisi !!" }),
  })
  .refine((val) => val.newPassword === val.confirmPassword, {
    path: ["confirmPassword"],
    message: "Konfirmasi Password tidak sesuai",
  });
