"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ConfigSchema } from "@/lib/validation/ConfigValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Editor } from "@tinymce/tinymce-react";
import { Facebook, Instagram, Linkedin, PencilLine } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormConfig = () => {
  const form = useForm<z.infer<typeof ConfigSchema>>({
    resolver : zodResolver(ConfigSchema),
    defaultValues : {
        keyword : undefined,
        metadata : undefined,
        namaOrganisasi : undefined,
        singkatan : undefined,
        motto1 : undefined,
        motto2 : undefined,
        deskripsiOrganisasi : undefined,
        deskripsiWeb : undefined,
        website : undefined,
        emaiOrganisasi : undefined,
        telephone : undefined,
        alamat : undefined,
        instagram : undefined,
        urlinstagram : undefined,
        facebook : undefined,
        urlfacebook : undefined,
        linkedIn : undefined,
        urllinkedIn: undefined,
    }
  });

  const handleSubmit = (values: z.infer<typeof ConfigSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <div className="bg-white/70 backdrop-blur border-b-2 border-b-primary w-5/12 shadow-sm py-2 text-lg font-semibold">
          SEO Modul (Biar enak di cari di google)
        </div>
        <div className="flex flex-wrap gap-5">
          <FormField
            control={form.control}
            name="keyword"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Keyword (untuk pencarian browser)</FormLabel>
                <FormControl>
                  <Textarea placeholder="Tulis Keyword Disini..." {...field} />
                </FormControl>
                <FormDescription>
                  Ex : Education, Organization, LSM, etc
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="metadata"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>
                  Metadata (penjelasan singkat web/organisasi)
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="Tulis Metadata Disini..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="bg-white/70 backdrop-blur border-b-2 border-b-primary w-3/12 shadow-sm py-2 text-lg font-semibold">
          Informasi Dasar
        </div>
        <div className="flex flex-wrap gap-5">
          <FormField
            control={form.control}
            name="namaOrganisasi"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Nama Organisasi</FormLabel>
                <FormControl>
                  <Input placeholder="LDF Ash...." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="singkatan"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>singkatan</FormLabel>
                <FormControl>
                  <Input placeholder="BEM..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-wrap gap-5">
          <FormField
            control={form.control}
            name="motto1"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Motto Organisasi (1)</FormLabel>
                <FormControl>
                  <Input placeholder="Motto..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="motto2"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Motto Organisasi (2)</FormLabel>
                <FormControl>
                  <Input placeholder="Motto..." {...field} />
                </FormControl>
                <FormDescription className="text-xs">
                  Ini Optional
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="deskripsiOrganisasi"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Deskripsi Organisasi</FormLabel>
              <FormControl>
                <Editor
                  apiKey="swvhoepk3kibkzyqdcjvxse5o6r1ulmed8va9rm4f7vbqb83"
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
                  initialValue="Jelaskan tentang organisasi anda disini..."
                  onEditorChange={(Content) => field.onChange(Content)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="deskripsiWeb"
          render={({ field }) => (
            <FormItem className="flex-grow">
              <FormLabel>Deskripsi Web</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tulis Deskripsi Web Disini..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-wrap gap-5">
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>URL Website</FormLabel>
                <FormControl>
                  <Input placeholder="https://loca..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="emaiOrganisasi"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Email Organisasi</FormLabel>
                <FormControl>
                  <Input placeholder="Exam@gmail.com..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="telephone"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Telephone</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="0821374..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="alamat"
          render={({ field }) => (
            <FormItem className="flex-grow">
              <FormLabel>Alamat Organisasi</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tulis Alamat Organisasi Disini..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="bg-white/70 backdrop-blur border-b-2 border-b-primary w-3/12 shadow-sm py-2 text-lg font-semibold">
          Social Media <span className="text-xs">(Optional)</span>
        </div>
        <div className="flex flex-wrap gap-5">
          <FormField
            control={form.control}
            name="instagram"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel className="flex items-center gap-2"><Instagram className="w-5 h-5"/>Instagram</FormLabel>
                <FormControl>
                  <Input placeholder="@instag..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="facebook"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel className="flex items-center gap-2"><Facebook className="w-5 h-5" />Facebook</FormLabel>
                <FormControl>
                  <Input placeholder="@faceb..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="linkedIn"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel className="flex items-center gap-2"><Linkedin className="w-5 h-5" />LinkedIn</FormLabel>
                <FormControl>
                  <Input placeholder="@linked..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-wrap gap-5">
          <FormField
            control={form.control}
            name="urlinstagram"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>URL Instagram</FormLabel>
                <FormControl>
                  <Input placeholder="https://instag..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="urlfacebook"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>URL Facebook</FormLabel>
                <FormControl>
                  <Input placeholder="https://www.faceb..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="urllinkedIn"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>URL LinkedIn</FormLabel>
                <FormControl>
                  <Input placeholder="https://www.linked..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">
          <PencilLine className="mr-2 w-5 h-5" />
          Update
        </Button>
      </form>
    </Form>
  );
};

export default FormConfig;
