import z from "zod";

export const UserSchema = z.object({
    name: z
        .string("O nome precisa ser uma string")
        .min(3, "O nome tem um mínimo de 3 caracteres")
        .max(255, "O nome tem um máximo de 255 caracteres")
        .regex(
            /^[A-Za-zÀ-ÿ\s]+$/,
            "O nome não pode conter números ou caracteres especiais"
        ),

    email: z.email("Digite um email válido"),

    role: z.enum(["student", "teacher"]),

    password: z
        .string()
        .min(8, "A senha precisa ter um mínimo de 8 caracteres")
        .max(255, "A senha precisa ter um máximo de 255 caracteres")
        .regex(/[A-Z]/, "A senha deve ter pelo menos uma letra maiúscula")
        .regex(/[a-z]/, "A senha deve ter pelo menos uma letra minúscula")
        .regex(/[0-9]/, "A senha deve ter pelo menos um número")
        .regex(
            /[^A-Za-z0-9]/,
            "A senha deve ter pelo menos um caractere especial"
        ),

    house_id: z.number().int().positive()
});


export const HouseSchema = z.object({
    name: z
        .string("O nome precisa ser uma string")
        .min(3, "O nome tem um mínimo de 3 caracteres")
        .max(255, "O nome tem um máximo de 255 caracteres")
        .regex(
            /^[A-Za-zÀ-ÿ\s]+$/,
            "O nome não pode conter números ou caracteres especiais"
        ),

    banner: z
        .string("O banner precisa ser uma string")
        .min(3, "O banner precisa ter mais de 3 caracteres"),

    describle: z
        .string("A descrição precisa ser uma string")
        .min(50, "A descrição precisa ter mais de 50 caracteres")
        .max(500, "Máximo de 500 caracteres")
});