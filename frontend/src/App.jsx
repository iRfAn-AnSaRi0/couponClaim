import React, { useEffect, useState } from "react";
import { getCoupons, claimCoupon } from "./Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCoupons();
  }, []);

  const fetchCoupons = async () => {
    setLoading(true);
    try {
      const data = await getCoupons();
      setCoupons(data);
    } catch (error) {
      toast.error("Error fetching coupons.");
    }
    setLoading(false);
  };

  const handleClaim = async (couponId) => {
    try {
      const data = await claimCoupon(couponId);
      toast.success(data.message);
      fetchCoupons();
    } catch (error) {
      toast.error(error.response.data.error[0] || "Error claiming coupon.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
        🎉 Coupon Distribution System 🎉
      </h1>

      {loading ? (
        <p className="text-lg text-gray-600">Loading coupons...</p>
      ) : coupons.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {coupons.map((coupon) => (
            <div
              key={coupon._id}
              className="bg-white shadow-lg rounded-xl p-6 text-center transform transition duration-300 hover:scale-105"
            >
              <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
                {coupon.code}
              </h2>
              <button
                onClick={() => handleClaim(coupon._id)}
                disabled={coupon.status === "claimed"}
                className={`w-full py-2 rounded-lg font-medium text-white transition ${
                  coupon.status === "claimed"
                    ? "bg-gray-400 cursor-not-allowed opacity-70"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {coupon.status === "claimed" ? "✅ Claimed" : "🎁 Claim"}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-lg font-semibold text-red-500">No coupons available</p>
      )}

      <ToastContainer />
    </div>
  );
};

export default App;
