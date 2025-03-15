import { Router } from "express";
import { Coupon } from "../controller/CouponController.js";
import { Claim } from "../controller/CouponController.js";

const router = Router()

router.route("/coupons").get(
    Coupon
)

router.route("/claim").post(
    Claim
)

export { router }