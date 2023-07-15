import axios from "axios";

// export const API_URL = "http://localhost:8000";
export const API_URL = "https://deployecommbackend-production.up.railway.app";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
  "Content-Type": "application/json",
  },
});

export default class ApiService {
  static saveStripeInfo(data = {}) {
    return api.post(`${API_URL}/payments/save-stripe-info/`, data);
  }
}
