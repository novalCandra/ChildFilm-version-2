import * as z from "zod";

export const SchemaRegister = z.object({
    username: z.string().min(1, "wajib mengisi username").max(255, "maximal 255 karakter"),
    password: z.string().min(1, "wajib mengisi paswrord").max(255, "maximal 255 karakter"),
    konfirmasi: z.string().min(1, "wajib mengisi password")
})

// CONFIRM PASSWORD
export const fullShemaAuth = SchemaRegister.refine(
    (data) => data.password === data.konfirmasi,
    { message: "Passsword tidak sama" }
)


export const SchemaLogin = SchemaRegister.omit({ konfirmasi: true })

export const schemaProfile = z.object({
    username: z.string().min(1, "wajib mengisi username").max(255, "maximal 255 karakter"),
    email: z.email().min(1, "wajib mengisi email"),
    password: z.string().min(1, "wajib mengisi paswrord").max(255, "maximal 255 karakter"),
    profile: z.string()
}
)

export const schemaPlayList = z.object({
    judul: z.string().min(1, "wajib mengisi judul PlayList").max(255, "maximal 10 karakter"),
    nama: z.string().min(1, "wajib mengisi nama PlayList").max(255, "maximal 10 karakter"),
    thumbnail: z.any()
})