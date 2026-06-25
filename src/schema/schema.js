import * as z from "zod";

export const SchemaRegister = z.object({
    username: z.string().min(1, "wajib mengisi username").max(255, "maximal 255 karakter"),
    password: z.string().min(1, "wajib mengisi paswrord").max(255, "maximal 255 karakter"),
    konfirmasi: z.string().min(1, "wajib mengisi konfirmasi password").max(255, "maximal 255 karakter")
})