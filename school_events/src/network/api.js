import axios from "axios";

const API_URL = "http://localhost:1337/api/events";

export const fetchEvents = async () => {
  try {
    const response = await axios.get(`${API_URL}?populate=*`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};
