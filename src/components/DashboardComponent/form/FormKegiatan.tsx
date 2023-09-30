"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { kategori, status } from "@/lib/EnumValue";
import { cn } from "@/lib/utils";
import { KegiatanSchema } from "@/lib/validation/PostValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Editor } from "@tinymce/tinymce-react";
import { format } from "date-fns";
import { CalendarIcon, Save } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormKegiatan = () => {
  const form = useForm<z.infer<typeof KegiatanSchema>>({
    resolver : zodResolver(KegiatanSchema),
    defaultValues : {
      author : "",
      gambarBerita : "",
      judul : "",
      kategori : undefined,
      konten : "",
      ringkasan : "",
      subUnit : undefined,
      tanggal : new Date(),
    }
  });

  const handleSubmit = (values: z.infer<typeof KegiatanSchema>) => {
    console.log(values);
  };
  
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <div className="flex flex-wrap gap-5">
            <FormField
              control={form.control}
              name="judul"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormLabel>Judul</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Isi judul berita"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ringkasan"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormLabel>Ringkasan / Keyword</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="untuk pencarian google"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-wrap gap-5">
            <FormField
              control={form.control}
              name="kategori"
              render={({ field }) => (
                <FormItem className="flex-grow">
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
                        {kategori.map((data) => {
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
              name="gambarBerita"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormLabel>Gambar Utama</FormLabel>
                  <FormControl>
                    <Input type="file" accept="image/*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="konten"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Content</FormLabel>
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
                    initialValue="Tulis konten anda disini..."
                    onEditorChange={(Content) => field.onChange(Content)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-wrap gap-5">
            <FormField
              control={form.control}
              name="tanggal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Waktu / Tanggal</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal flex justify-between items-center",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pilih Tanggal</span>
                          )}
                          <CalendarIcon className="h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>Tanggal Pelaksanaan</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subUnit"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormLabel>Sub-Unit</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih Sub-Unit" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Sub-Unit...</SelectLabel>
                        {status.map((data) => {
                          return (
                            <SelectItem key={data} value={data}>
                              {data}
                            </SelectItem>
                          );
                        })}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormDescription>Unit Pelaksana</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="penulis" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">
            <Save className="mr-2 w-5" />
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

export default FormKegiatan;
