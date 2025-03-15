
import mongoose from "mongoose";
import dotenv from "dotenv"
import { DbConnection } from "./db/DbConnection.js";
import { CoupoDetails } from "./model/Coupon.js";

dotenv.config({
    path: './.env'
})
DbConnection();

const addCoupons = async () => {
    try {
        const coupons = [
            { code: "SAVE10"},
            { code: "SAVE20"},
            { code: "WELCOME5"},
            { code: "DISCOUNT15"}
        ];

        await CoupoDetails.insertMany(coupons);
        console.log("✅ Coupons added successfully!");
        process.exit();
    } catch (error) {
        console.error("❌ Error adding coupons:", error);
        process.exit(1);
    }
};

addCoupons();
