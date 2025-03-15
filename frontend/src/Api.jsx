import axios from "axios";

const API_URL = "http://localhost:8080/v2";

export const getCoupons = async () => {
  const response = await axios.get(`${API_URL}/coupons`);
  console.log(response.data.data);
  
  return response.data.data;
};

export const claimCoupon = async () => {
  const response = await axios.post(`${API_URL}/claim`, {}, { withCredentials: true });
  return response.data.data;
};
