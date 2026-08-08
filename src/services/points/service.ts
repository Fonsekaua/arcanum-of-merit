import HouseModel from "../../models/houses/model";
import PointModel from "../../models/points/model";
import UserModel from "../../models/users/model";
import { EarningPoints, LossPoints } from "../../types/points";

export const ServicePoint = {

    insertPoint: async (data: EarningPoints) => {
        try {

            const user = await UserModel.findUniqueUser(data.users.connect?.id as number);

            if (!user.success) {
                return user;
            }

            if (!user.response) {
                return {
                    success: false,
                    message: "Usuário não encontrado."
                };
            }

            const result = await PointModel.insertPoint(data);

            if (!result.success) {
                return result;
            }

            return {
                success: true,
                user: user.response.name,
                message: "Os pontos do usuário foram inseridos!",
                response: result.response?.points
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                message: "Erro ao inserir pontos.",
                err
            };
        }
    },


    removePoint: async (data: LossPoints) => {
        try {

            const user = await UserModel.findUniqueUser(data.users.connect?.id as number);

            if (!user.success) {
                return user;
            }

            if (!user.response) {
                return {
                    success: false,
                    message: "Usuário não encontrado."
                };
            }

            const result = await PointModel.removePoint(data);

            if (!result.success) {
                return result;
            }

            return {
                success: true,
                user: user.response.name,
                message: "Os pontos do usuário foram removidos!",
                response: result.response?.points
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                message: "Erro ao remover pontos.",
                err
            };
        }
    },


    findInsertByUser: async (userID: number) => {
        try {

            const user = await UserModel.findUniqueUser(userID);

            if (!user.success) {
                return user;
            }

            if (!user.response) {
                return {
                    success: false,
                    message: "Usuário não encontrado."
                };
            }

            const result = await PointModel.findInsertByUser(userID);

            if (!result.success) {
                return result;
            }

            return {
                success: true,
                user: user.response.name,
                message: "Pontos ganhos pelo usuário.",
                response: result.response
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                message: "Erro ao buscar pontos ganhos.",
                err
            };
        }
    },


    findRemoveByUser: async (userID: number) => {
        try {

            const user = await UserModel.findUniqueUser(userID);

            if (!user.success) {
                return user;
            }

            if (!user.response) {
                return {
                    success: false,
                    message: "Usuário não encontrado."
                };
            }

            const result = await PointModel.findRemoveByUser(userID);

            if (!result.success) {
                return result;
            }

            return {
                success: true,
                user: user.response.name,
                message: "Pontos perdidos pelo usuário.",
                response: result.response
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                message: "Erro ao buscar pontos perdidos.",
                err
            };
        }
    },


    findTotalByUser: async (userID: number) => {
        try {

            const user = await UserModel.findUniqueUser(userID);

            if (!user.success) {
                return user;
            }

            if (!user.response) {
                return {
                    success: false,
                    message: "Usuário não encontrado."
                };
            }

            const add = await PointModel.findInsertByUser(userID);
            const remove = await PointModel.findRemoveByUser(userID);

            if (!add.success) {
                return add;
            }

            if (!remove.success) {
                return remove;
            }

            const total = Number(add.response) - Number(remove.response);

            return {
                success: true,
                user: user.response.name,
                message: "Total de pontos do usuário.",
                response: total
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                message: "Erro ao calcular total de pontos.",
                err
            };
        }
    },


    findInsertByHouse: async (houseID: number) => {
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

            const result = await PointModel.findInsertByHouse(houseID);

            if (!result.success) {
                return result;
            }

            return {
                success: true,
                house: house.response.name,
                message: "Pontos ganhos pela casa.",
                response: result.response
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                message: "Erro ao buscar pontos da casa.",
                err
            };
        }
    },


    findRemoveByHouse: async (houseID: number) => {
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

            const result = await PointModel.findRemoveByHouse(houseID);

            if (!result.success) {
                return result;
            }

            return {
                success: true,
                house: house.response.name,
                message: "Pontos perdidos pela casa.",
                response: result.response
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                message: "Erro ao buscar pontos perdidos da casa.",
                err
            };
        }
    },


    findTotalByHouse: async (houseID: number) => {
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

            const add = await PointModel.findInsertByHouse(houseID);
            const remove = await PointModel.findRemoveByHouse(houseID);

            if (!add.success) {
                return add;
            }

            if (!remove.success) {
                return remove;
            }

            const total = Number(add.response) - Number(remove.response);

            return {
                success: true,
                house: house.response.name,
                message: "Total de pontos da casa.",
                response: total
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                message: "Erro ao calcular total de pontos da casa.",
                err
            };
        }
    }
};