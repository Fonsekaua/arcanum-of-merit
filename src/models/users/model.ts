import { prisma } from "../../libs/prisma";
import { User } from "../../types/user";

const users = prisma.users;

const UserModel = {

    findManyUsers: async () => {
        try {
            const response = await users.findMany();

            return {
                success: true,
                users: response
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
            const response = await users.create({
                data
            });

            return {
                success: true,
                user: response
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
                    user: response
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
                user: response
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