import { success } from "zod";
import { prisma } from "../../libs/prisma";
import { EarningPoints, LossPoints } from "../../types/points";
import UserModel from "../users/model";
import HouseModel from "../houses/model";

const {earningpoints,losspoints} = prisma

const PointModel = {
    insertPoint: async(data: EarningPoints ) => {
        try {
            const response = await earningpoints.create({data})
            const user = await UserModel.findUniqueUser(response.userid as number)
            return {
                success: true,
                user: user.user?.name,
                pointsInsert: response.points
            }
        }catch(err) {
            console.log("Ocorreu um erro: ",err)
            return {
                sucess: false,
                err
            }
        }
    },
    removePoint: async(data: LossPoints ) => {
        try {
            const response = await losspoints.create({data})
            const user = await UserModel.findUniqueUser(response.userid as number)
            return {
                success: true,
                user: user.user?.name,
                pointsRemove: response.points
            }
        }catch(err) {
            console.log("Ocorreu um erro: ",err)
            return {
                sucess: false,
                err
            }
        }
    },
    findInsertByUser: async (userID: number) => {
          try {
              const user = await UserModel.findUniqueUser(userID)
            if(!user.user) return;

            const response = await earningpoints.aggregate({
                where: {
                    userid: user.user.id
                },
                _sum: {
                    points:true
                }
            })
            return {
                sucess: true,
                user: user.user.name,
                points: response._sum.points
            }
          }catch(err) {
            console.log("Ocorreu um erro: ",err)
            return {
                sucess: false,
                err
            }
        }
    },

    findRemoveByUser: async (userID: number) => {
          try {
              const user = await UserModel.findUniqueUser(userID)
            if(!user.user) return;

            const response = await losspoints.aggregate({
                where: {
                    userid: user.user.id
                },
                _sum: {
                    points:true
                }
            })
            return {
                sucess: true,
                user: user.user.name,
                points: response._sum.points
            }
          }catch(err) {
            console.log("Ocorreu um erro: ",err)
            return {
                sucess: false,
                err
            }
        }
    },
    findTotalByUser: async(userID: number) => {
        try{
            const user = await UserModel.findUniqueUser(userID)
            if(!user.user) return;

            const add = await PointModel.findInsertByUser(user.user.id);
            const remove = await PointModel.findRemoveByUser(user.user.id);

            const addPoints = add?.points ?? 0
            const removePoints =  remove?.points ?? 0

            const total = addPoints - removePoints
        return {
            success: true,
            user: user.user.name,
            total
        }
        }catch(err) {
            console.log("Ocorreu um erro: ",err)
            return {
                sucess: false,
                err
            }
        }
    },
    findInsertByHouse: async (houseID: number) => {
                try{
            const house = await HouseModel.findUniqueHouse(houseID)
            if(!house.house) return;

            const response = await earningpoints.aggregate({
                where: {
                    id: house.house.id
                },
                _sum: {
                    points: true
                }
            })
        return {
            success: true,
            house: house.house.name,
            points: response._sum.points
            
        }
        }catch(err) {
            console.log("Ocorreu um erro: ",err)
            return {
                sucess: false,
                err
            }
        }
    },

    findRemoveByHouse: async (houseID: number) => {
                try{
            const house = await HouseModel.findUniqueHouse(houseID)
            if(!house.house) return;

            const response = await losspoints.aggregate({
                where: {
                    id: house.house.id
                },
                _sum: {
                    points: true
                }
            })
        return {
            success: true,
            house: house.house.name,
            points: response._sum.points
            
        }
        }catch(err) {
            console.log("Ocorreu um erro: ",err)
            return {
                sucess: false,
                err
            }
        }
    },

    findTotalByHouse: async(houseID: number) => {
            try{
            const house = await HouseModel.findUniqueHouse(houseID)
            if(!house.house) return;

            const add = await PointModel.findInsertByHouse(house.house.id)
            const remove = await PointModel.findRemoveByHouse(house.house.id)

            const addPoints = add?.points ?? 0
            const removePoints = remove?.points ?? 0

            const total = addPoints - removePoints
        return {
            success: true,
            house: house.house.name,
            add: addPoints,
            remove: removePoints,
            total
            
        }
        }catch(err) {
            console.log("Ocorreu um erro: ",err)
            return {
                sucess: false,
                err
            }
        }
    }
}

export default PointModel;