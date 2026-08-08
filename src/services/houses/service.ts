
import HouseModel from "../../models/houses/model";
import { House } from "../../types/house";

export const ServiceHouse = {

    findManyHouses: async () => {
        try {
            const result = await HouseModel.findManyHouses();

            if (!result.success) {
                return result;
            }

            return {
                success: true,
                message: "Casas encontradas!",
                response: result.response
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                message: "Erro ao buscar casas.",
                err
            };
        }
    },


    createHouse: async (data: House) => {
        try {

            // Verifica se já existe uma casa com esse nome
            const houseExists = await HouseModel.findFirstHouse(data.name);

            if (!houseExists.success) {
                return houseExists;
            }

            if (houseExists.response) {
                return {
                    success: false,
                    message: "Já existe uma casa com esse nome."
                };
            }

            const result = await HouseModel.createHouse(data);

            if (!result.success) {
                return result;
            }

            return {
                success: true,
                message: "Casa criada com successo!",
                response: result.response
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                message: "Erro ao criar casa.",
                err
            };
        }
    },


    findUsersByHouse: async (houseID: number) => {
        try {

            const house = await HouseModel.findUniqueHouse(houseID);

            if (!house.success) {
                return house;
            }

            if (!house.response) {
                return {
                    success: false,
                    message: "Casa não encontrada."
                };
            }

            const result = await HouseModel.findUsersByHouse(houseID);

            if (!result.success) {
                return result;
            }

            return {
                success: true,
                message: "Usuários membros da casa.",
                house: result.house,
                response: result.response
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                message: "Erro ao buscar usuários da casa.",
                err
            };
        }
    },


    findFirstHouse: async (name: string) => {
        try {
            const result = await HouseModel.findFirstHouse(name);

            if (!result.success) {
                return result;
            }

            if (!result.response) {
                return {
                    success: false,
                    message: "Casa não encontrada."
                };
            }

            return {
                success: true,
                message: "Casa encontrada!",
                response: result.response
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                message: "Erro ao buscar casa.",
                err
            };
        }
    },


    findUniqueHouse: async (houseID: number) => {
        try {
            const result = await HouseModel.findUniqueHouse(houseID);

            if (!result.success) {
                return result;
            }

            if (!result.response) {
                return {
                    success: false,
                    message: "Casa não encontrada."
                };
            }

            return {
                success: true,
                message: "Casa encontrada!",
                response: result.response
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                message: "Erro ao buscar casa.",
                err
            };
        }
    }
};