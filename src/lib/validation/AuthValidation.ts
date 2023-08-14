import { z } from "zod";

export const LoginSchema = z.object({
  userName: z.string().min(1, { message: "Harus isi username" }),
  password: z.string().min(1, { message: "Harus isi password" }),
});

export const RegisterSchema = z
  .object({
    namaLengkap: z.string().min(1, { message: "Harus masukkan nama lengkap" }),
    namaPanggilan: z
      .string()
      .min(1, { message: "Harus masukkan nama panggilan" })
      .max(25, {
        message: "panjang banget panggilanmu bahh, pendekkan lagi!!",
      }),
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
    password: z
      .string()
      .min(1, { message: "Password harus diisi" })
      .min(3, { message: "sikit banget bahh, jangan kurang dari 3 karakter" })
      .regex(/^(?=.*[A-Z])(?=.*\d)/, {
        message:
          "Password harus setidaknya memiliki satu huruf kapital dan satu angka",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Harus konfirmasi password terlebih dahulu" }),
  })
  .refine((val) => val.password === val.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password nggak sesuai",
  });

export const EmailSchema = z.object({
  email: z
    .string()
    .email()
    .min(1, { message: "email harus diisi" })
    .refine((val) => val.endsWith("@gmail.com") || val.endsWith("@yahoo.com"), {
      message: "Emailnya yang bener dong (...@gmail.com) atau (...@yahoo.com)",
    }),
});

export const NewPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(1, { message: "Harus diisi !!" })
      .min(3, { message: "sikit banget bahh, jangan kurang dari 3 karakter" })
      .regex(/^(?=.*[A-Z])(?=.*\d)/, {
        message:
          "Password harus setidaknya memiliki satu huruf kapital dan satu angka",
      }),
    confirmPassword: z.string().min(1, { message: "harus diisi !!" }),
  })
  .refine((val) => val.newPassword === val.confirmPassword, {
    path: ["confirmPassword"],
    message: "Konfirmasi Password tidak sesuai",
  });
