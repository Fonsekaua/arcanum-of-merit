import { prisma } from "../../libs/prisma";
import { User } from "../../types/user";
import bcrypt from 'bcrypt'
const users = prisma.users;

const UserModel = {

    findManyUsers: async () => {
        try {
            const response = await users.findMany();
            return {
                success: true,
                message: "Usuarios encontrados!",
                response: response
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                err
            };
        }
    },
    findManyUserByRole: async(role: "student" | "teacher") => {
        try {
            const response = await users.findMany({
            where: {
                role
            }
        })
            return {
                success: true,
                message: "Usuarios encontrados!",
                response: response
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                err
            };
        }
    },
    createUser: async (data: User) => {
        try {
            const email = await UserModel.findEmail(data.email);
            if(email.success) {
                return {
                    success: false,
                    message: "Email já esta em uso.",
                    response: email.response
                }
            }
            const passwordHash = await bcrypt.hash(data.password,10);
            const response = await users.create({
                data: {
                    ...data,
                    password: passwordHash
                }
            });

            return {
                success: true,
                message: "Usuario criado com successo!",
                response: response
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                err
            };
        }
    },

    switchHouseForUser: async(userID: number,houseID:number) => {
        try{
            const user = await UserModel.findUniqueUser(userID)
            if(user.success){
                const response = await users.update({
                    data: {
                        house_id: houseID
                    },
                    where: {
                        id: userID
                    }
                })

                return {
                    success: true,
                    message: "A casa do usuario foi trocada!",
                    response: response
                }
            }
        }catch(err){
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                err
            };
        }
        
    },
    findUniqueUser: async(id: number) => {
        try {
            const response = await users.findUnique({
                where: {
                    id
                }
            });

            return {
                success: true,
                message: "O usuario foi encontrado",
                response: response
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                err
            };
        }
    },
    findUniqueUserByEmail: async(email: string,password: string) => {
        try { 
            const response = await users.findUnique({
                where: {
                    email
                }
            })
            if(!response) {
                return {
                    success: false,
                    message: "Credeciais invalidas",
                    response
                }
            }
            const passwordCorrect = await bcrypt.compare(password,response?.password);
            if(!passwordCorrect) {
                return {
                    success: false,
                    message: "Credeciais invalidas",
                    response
                }
            }

            return { 
                success: true,
                message: "Login bem sucedido!",
                response
            }
            
        }catch(err){
               console.log("Ocorreu um erro:", err);

            return {
                success: false,
                err
            };
        }
    },
    findEmail: async(email: string) => {
        try {
            const response = await users.findUnique({
                where: {
                    email
                },
                select: {
                    email: true
                }
            });

            return {
                success: true,
                message: "Email encontrado",
                response: response
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


export default UserModel;