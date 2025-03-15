import mongoose, { Schema } from "mongoose";

const ClaimSchema = new Schema({
    ipAddress: {
        type: String,
        required: true
    },
    cookieId: {
        type: String,
        required: true
    },
    couponCode: {
        type: String,
        required: true
    },
    claimedAt: {
        type: Date,
        default: Date.now
    }
});

export const ClaimDetails = mongoose.model("ClaimDetails", ClaimSchema)
