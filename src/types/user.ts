import z from "zod";
import { Prisma } from "../generated/prisma/client";
import { UserSchema } from "../libs/zod";

export type User = z.infer<typeof UserSchema>;