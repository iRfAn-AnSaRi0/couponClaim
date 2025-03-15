

import mongoose, { Schema } from "mongoose";

const CouponSchema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        enum: ["available", "claimed"],
        default: "available"
    }
});


export const CoupoDetails = mongoose.model("CoupoDetails", CouponSchema)
