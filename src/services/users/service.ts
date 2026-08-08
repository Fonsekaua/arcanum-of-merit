import { UserSchema } from "../../libs/zod";
import UserModel from "../../models/users/model";
import { User } from "../../types/user";


export const ServiceUser = {

    findManyUsers: async () => {
        try {
            const result = await UserModel.findManyUsers();

            if (!result.success) {
                return result;
            }

            return {
                success: true,
                message: "Usuários encontrados!",
                response: result.response
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                message: "Erro ao buscar usuários.",
                err
            };
        }
    },


    findManyUserByRole: async (role: "student" | "teacher") => {
        try {
            const result = await UserModel.findManyUserByRole(role);

            if (!result.success) {
                return result;
            }

            return {
                success: true,
                message: "Usuários encontrados!",
                response: result.response
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                message: "Erro ao buscar usuários por função.",
                err
            };
        }
    },


    createUser: async (data: User) => {
        try {
            const result = await UserModel.createUser(data);

            if (!result.success) {
                return result;
            }

            return {
                success: true,
                message: "Usuário criado com successo!",
                response: result.response
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                message: "Erro ao criar usuário.",
                err
            };
        }
    },


    findUniqueUser: async (id: number) => {
        try {
            const result = await UserModel.findUniqueUser(id);

            if (!result.success) {
                return result;
            }

            if (!result.response) {
                return {
                    success: false,
                    message: "Usuário não encontrado."
                };
            }

            return {
                success: true,
                message: "Usuário encontrado!",
                response: result.response
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                message: "Erro ao buscar usuário.",
                err
            };
        }
    },


    findUniqueUserByEmail: async (
        email: string,
        password: string
    ) => {
        try {
            const result = await UserModel.findUniqueUserByEmail(
                email,
                password
            );

            if (!result.success) {
                return result;
            }

            return {
                success: true,
                message: "Login bem-sucedido!",
                response: result.response
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                message: "Erro ao realizar login.",
                err
            };
        }
    },


    switchHouseForUser: async (
        userID: number,
        houseID: number
    ) => {
        try {
            // Verifica se o usuário existe
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

            const result = await UserModel.switchHouseForUser(
                userID,
                houseID
            );

            if (!result?.success) {
                return result;
            }

            return {
                success: true,
                message: "A casa do usuário foi trocada!",
                response: result.response
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                message: "Erro ao trocar a casa do usuário.",
                err
            };
        }
    }
};