import axios from "axios";

const API_URL = "https://be-ksp.analitiq.id/"

export default axios.create({
    baseURL: API_URL,
    headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
    }
});