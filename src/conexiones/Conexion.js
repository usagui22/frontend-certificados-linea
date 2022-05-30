import axios from "axios";
//import {API_URL} from "../env.json"

export const API = axios.create({
    baseURL: "http://localhost:8080/",
})