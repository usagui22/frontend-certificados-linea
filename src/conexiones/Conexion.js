// import axios, { Axios } from "axios";
// //import {API_URL} from "../env.json"

// export const API = axios.create({
//     baseURL: "http://localhost:8080/",
// })


import axios from "axios";

export const API=axios.create({
    baseURL:'http://localhost:8080/',
    // baseURL: 'http://192.168.0.222:8080'
} )