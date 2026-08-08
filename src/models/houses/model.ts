import { prisma } from "../../libs/prisma";
import { House } from "../../types/house";

const houses = prisma.houses;

const HouseModel = {

    findManyHouses: async () => {
        try {
            const response = await houses.findMany();

            return {
                success: true,
                message: "Casas encontradas!",
                response
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                err
            };
        }
    },


    createHouse: async (data: House) => {
        try {
            const response = await houses.create({
                data
            });

            return {
                success: true,
                message: "Casa criada com successo!",
                response
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                err
            };
        }
    },


    findUsersByHouse: async (houseID: number) => {
        try {
            const response = await houses.findUnique({
                where: {
                    id: houseID
                },
                include: {
                    users: true
                }
            });

            return {
                success: true,
                house: response?.name,
                message: "Usuários membros da casa",
                response: response?.users ?? []
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                err
            };
        }
    },


    findFirstHouse: async (name: string) => {
        try {
            const response = await houses.findFirst({
                where: {
                    name
                },
                include: {
                    _count: {
                        select: {
                            users: true
                        }
                    }
                }
            });

            return {
                success: true,
                message: "Casa encontrada!",
                response
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                err
            };
        }
    },


    findUniqueHouse: async (houseID: number) => {
        try {
            const response = await houses.findUnique({
                where: {
                    id: houseID
                },
                include: {
                    _count: {
                        select: {
                            users: true
                        }
                    }
                }
            });

            return {
                success: true,
                message: "Casa encontrada!",
                response
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                err
            };
        }
    }
};

export default HouseModel;