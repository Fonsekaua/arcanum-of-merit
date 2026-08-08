import z from "zod";
import { Prisma } from "../generated/prisma/client";
import { HouseSchema } from "../libs/zod";

export type House = z.infer<typeof HouseSchema>;