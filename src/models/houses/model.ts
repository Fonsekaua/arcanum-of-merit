import { success } from "zod";
import { prisma } from "../../libs/prisma";
import { House } from "../../types/house";

const houses = prisma.houses

const HouseModel = {
    findManyHouses: async() => {
        try {
            const response = await houses.findMany();
            return {
                sucess: true,
                houses: response
            }
        }catch(err) {
            console.log('Ocorreu um erro:',err)
            return {
                sucess: false,
                err
            }
        }
    },
    createHouse: async(data: House) => {
           try {
            const response = await houses.create({data});
            return {
                sucess: true,
                houses: response
            }
        }catch(err) {
            console.log('Ocorreu um erro:',err)
            return {
                sucess: false,
                err
            }
        }
    },
    findUsersByHouse: async (houseID: number) => {
        try {
             const response = await houses.findFirst({
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
                response: response?.users
             }
             



            
        }catch(err) {
            console.log('Ocorreu um erro:',err)
            return {
                sucess: false,
                err
            }
        }
    },
    findFirstHouse: async(name: string) => {
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
                sucess: true,
                house: response
            }
        }catch(err) {
            console.log('Ocorreu um erro:',err)
            return {
                sucess: false,
                err
            }
        }
    },

    findUniqueHouse: async(houseID: number) => {
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
                sucess: true,
                house: response
            }
        }catch(err) {
            console.log('Ocorreu um erro:',err)
            return {
                sucess: false,
                err
            }
        }
    }

}

export default HouseModel;