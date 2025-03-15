import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { CoupoDetails } from "../model/Coupon.js";
import { ClaimDetails } from "../model/Claim.js";

const Coupon = AsyncHandler(async (req, res, next) => {
    const coupons = await CoupoDetails.find();
    if (!coupons.length) {
        return next(new ApiError(404, "No available coupons found"));
    }
    res.status(200).json(new ApiResponse(200, coupons));
});

const Claim = AsyncHandler(async (req, res, next) => {
    const ip = req.ip;
    const cookieId = req.cookies["userId"] || Math.random().toString(36).substring(7);

    const existingClaim = await ClaimDetails.findOne({ ipAddress: ip }).sort({ claimedAt: -1 });
    if (existingClaim && (Date.now() - existingClaim.claimedAt) < 3600000) {
        return res.status(429).json(new ApiError(429, "You can claim another coupon in 1 hour"));
    }

    const coupon = await CoupoDetails.findOneAndUpdate(
        { status: "available" },
        { status: "claimed" },
        { new: true }
    );
    if (!coupon) {
        return next(new ApiError(400, "No coupons available"));
    }

    await ClaimDetails.create({ ipAddress: ip, cookieId, couponCode: coupon.code });
    res.cookie("userId", cookieId, { maxAge: 3600000, httpOnly: true });

    res.status(200).json(new ApiResponse(200, { message: "Coupon claimed successfully", coupon: coupon.code }));
});

export { Coupon, Claim };



