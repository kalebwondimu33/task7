import axios from "axios";
import { Job } from "@/types/job";

const BASE_URL = "https://akil-backend.onrender.com";

export const fetchJobs = async (): Promise<Job[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/opportunities/search`);
    console.log("API Response:", response.data); // Log response data
    return response.data; // Assuming the response data is the array of jobs
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error message:", error.message);
      console.error("Axios error response:", error.response);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};

export const fetchJobById = async (id: string): Promise<Job> => {
  try {
    const response = await axios.get(`${BASE_URL}/opportunities/${id}`);
    console.log("API Response by ID:", response.data); // Log response data
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error message:", error.message);
      console.error("Axios error response:", error.response);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};
