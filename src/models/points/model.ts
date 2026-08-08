import { prisma } from "../../libs/prisma";
import { EarningPoints, LossPoints } from "../../types/points";

const { earningpoints, losspoints } = prisma;

const PointModel = {

    insertPoint: async (data: EarningPoints) => {
        try {
            const response = await earningpoints.create({
                data
            });

            return {
                success: true,
                message: "Pontos inseridos com sucesso!",
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


    removePoint: async (data: LossPoints) => {
        try {
            const response = await losspoints.create({
                data
            });

            return {
                success: true,
                message: "Pontos removidos com sucesso!",
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


    findInsertByUser: async (userID: number) => {
        try {
            const response = await earningpoints.aggregate({
                where: {
                    userid: userID
                },
                _sum: {
                    points: true
                }
            });

            return {
                success: true,
                response: response._sum.points ?? 0
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                err
            };
        }
    },


    findRemoveByUser: async (userID: number) => {
        try {
            const response = await losspoints.aggregate({
                where: {
                    userid: userID
                },
                _sum: {
                    points: true
                }
            });

            return {
                success: true,
                response: response._sum.points ?? 0
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                err
            };
        }
    },


    findInsertByHouse: async (houseID: number) => {
        try {
            const response = await earningpoints.aggregate({
                where: {
                    users: {
                        house_id: houseID
                    }
                },
                _sum: {
                    points: true
                }
            });

            return {
                success: true,
                response: response._sum.points ?? 0
            };

        } catch (err) {
            console.log("Ocorreu um erro:", err);

            return {
                success: false,
                err
            };
        }
    },


    findRemoveByHouse: async (houseID: number) => {
        try {
            const response = await losspoints.aggregate({
                where: {
                    users: {
                        house_id: houseID
                    }
                },
                _sum: {
                    points: true
                }
            });

            return {
                success: true,
                response: response._sum.points ?? 0
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

export default PointModel;