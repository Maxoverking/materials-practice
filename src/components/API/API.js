import axios from "axios";
axios.defaults.baseURL = "https://63bb362a32d17a50908a3770.mockapi.io";

export const HTTPRequest = async (values) => {
    const response = await axios.post('/materials', values);
    return response.data;
}
