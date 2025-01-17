import axios from "axios";

// export const API_URL = "http://localhost:8000";
export const API_URL = process.env.REACT_APP_BACKEND_URL;

export const api = axios.create({
  baseURL: API_URL,
  headers: {
  "Content-Type": "application/json",
  },
});

export default class ApiService {
  static saveStripeInfo(data = {}) {
    return axios.post(`${process.env.REACT_APP_BACKEND_URL}/payments/save-stripe-info/`, data);
  }
}
