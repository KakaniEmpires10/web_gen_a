"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { FormEvent } from "react"
import { ContactMailSchema } from "@/lib/validation/MailContactValidation"
import { Textarea } from "@/components/ui/textarea"

export function FormContact() {
    const form = useForm<z.infer<typeof ContactMailSchema>>({
        resolver: zodResolver(ContactMailSchema),
        defaultValues: {
            nama: "",
            email: "",
            subjek: "",
            pesan: "",
        },
    })

    const handleSubmit = (values: z.infer<typeof ContactMailSchema>) => {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="nama"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="Namamu ..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>email</FormLabel>
                            <FormControl>
                                <Input placeholder="masukkan emailmu..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subjek"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subjek</FormLabel>
                            <FormControl>
                                <Input placeholder="tentang apakah ini..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="pesan"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Massage</FormLabel>
                            <FormControl>
                                <Textarea rows={10} placeholder="ketikkan pesan anda disini..." {...field} />
                            </FormControl>
                            <FormDescription>
                                kirimkan pesan/kesan/saran anda kepada kami
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}