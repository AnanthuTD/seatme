import axios from "axios";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const axiosInstance = axios.create({
	baseURL: apiUrl,
	headers: {
		"Content-Type": "application/json",
	},
});

export default axiosInstance;
