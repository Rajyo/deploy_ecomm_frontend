import axios from "axios";
// const baseURL = "http://127.0.0.1:8000/";
const baseURL = process.env.REACT_APP_BACKEND_URL;

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 30000,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "JWT " + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const originalRequest = error.config;
//     console.log(originalRequest);

//     // Prevent infinite loops
//     if (
//       error.response.status === 401 &&
//       originalRequest.url === "/token/refresh/"
//     ) {
//       localStorage.clear();
//       axiosInstance.defaults.headers["Authorization"] = null;
//       window.location.href = "/login";
//       return Promise.reject(error);
//     }

//     if (
//       error.response.data.code === "token_not_valid" &&
//       error.response.status === 401 &&
//       error.response.statusText === "Unauthorized"
//     ) {
//       const refreshToken = localStorage.getItem("refresh_token");

//       if (refreshToken) {
//         const tokenParts = JSON.parse(atob(refreshToken.split(".")[1]));

//         // exp date in token is expressed in seconds, while now() returns milliseconds:
//         const now = Math.ceil(Date.now() / 1000);
//         console.log(tokenParts.exp);

//         if (tokenParts.exp > now) {
//           return axiosInstance
//             .post("/token/refresh/", { refresh: refreshToken })
//             .then((response) => {
//               localStorage.setItem("access_token", response.data.access);
//               localStorage.setItem("refresh_token", response.data.refresh);
//             })
//             .then((response) => {
//               axiosInstance.defaults.headers["Authorization"] =
//                 "JWT " + response.data.access;
//               originalRequest.headers["Authorization"] =
//                 "JWT " + response.data.access;
//               return axiosInstance(originalRequest);
//             })
//             .catch((error) => {
//               console.log("Error occured during Refresh", error);
//               localStorage.clear();
//               axiosInstance.defaults.headers["Authorization"] = null;
//               window.location.href = "/login";
//               return Promise.reject(error);
//             });
//         } else {
//           console.log("Refresh token is expired", tokenParts.exp, now);
//           localStorage.clear();
//           axiosInstance.defaults.headers["Authorization"] = null;
//           window.location.href = "/login";
//         }
//       } else {
//         console.log("Refresh token not available.");
//         localStorage.clear();
//         axiosInstance.defaults.headers["Authorization"] = null;
//         window.location.href = "/login";
//       }
//     }

//     // specific error handling done elsewhere
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
