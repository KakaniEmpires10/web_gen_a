"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { JabatanAnggota, Pendidikan, kategoriAnggota } from "@/lib/EnumValue";
import { AnggotaSchema } from "@/lib/validation/PostValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Editor } from "@tinymce/tinymce-react";
import { Save } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormAnggota = () => {
  const form = useForm<z.infer<typeof AnggotaSchema>>({
    resolver : zodResolver(AnggotaSchema),
    defaultValues : {
        nama : "",
        jabatan : undefined,
        kategori : undefined,
        pendidikan : undefined,
        bidang : "",
        ahli : "",
        email : "",
        instagram : "",
        telephon : parseInt(""),
        gambar : "",
        deskripsi : ""
    }
  });

  const handleSubmit = (values: z.infer<typeof AnggotaSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <div className="flex flex-wrap gap-5">
          <FormField
            control={form.control}
            name="nama"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Nama</FormLabel>
                <FormControl>
                  <Input placeholder="Bambang" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jabatan"
            render={({ field }) => (
              <FormItem className="max-w-xs flex-grow">
                <FormLabel>Jabatan</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih Jabatan" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Jabatan...</SelectLabel>
                      {JabatanAnggota.map((data) => {
                        return (
                          <SelectItem key={data} value={data}>
                            {" "}
                            {data}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="kategori"
            render={({ field }) => (
              <FormItem className="max-w-xs flex-grow">
                <FormLabel>Kategori</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih Kategori" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Kategori...</SelectLabel>
                      {kategoriAnggota.map((data) => {
                        return (
                          <SelectItem key={data} value={data}>
                            {" "}
                            {data}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-wrap gap-5">
          <FormField
            control={form.control}
            name="pendidikan"
            render={({ field }) => (
              <FormItem className="max-w-xl flex-grow">
                <FormLabel>Pendidikan</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih Pendidikan" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Pendidikan...</SelectLabel>
                      {Pendidikan.map((data) => {
                        return (
                          <SelectItem key={data} value={data}>
                            {" "}
                            {data}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bidang"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Bidang</FormLabel>
                <FormControl>
                  <Input placeholder="bidang kuliah..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ahli"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Keahlian</FormLabel>
                <FormControl>
                  <Input placeholder="bidang keahlian..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-wrap gap-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Kontak (Email)</FormLabel>
                <FormControl>
                  <Input placeholder="Email@go..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="instagram"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Kontak (IG)</FormLabel>
                <FormControl>
                  <Input placeholder="@instagr..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="telephon"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Kontak (Hp)</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="0821***..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
            control={form.control}
            name="gambar"
            render={({ field }) => (
              <FormItem className="max-w-md">
                <FormLabel>Gambar Anggota</FormLabel>
                <FormControl>
                  <Input type="file" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        <FormField
            control={form.control}
            name="deskripsi"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Tentang Anda</FormLabel>
                <FormControl>
                  <Editor
                    apiKey="swvhoepk3kibkzyqdcjvxse5o6r1ulmed8va9rm4f7vbqb83" //{process.env.TINY_API_KEY}
                    init={{
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "wordcount",
                      ],
                    }}
                    initialValue="Tulis deskripsi anda disini..."
                    onEditorChange={(Content) => field.onChange(Content)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        <Button type="submit"><Save className="mr-2 w-5" /> Submit</Button>
      </form>
    </Form>
  );
};

export default FormAnggota;
