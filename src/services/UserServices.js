import axios from "./custom-axios";

// call api
const fetchAllUser = (page) => {
    return axios.get(`/api/users?page=${page}`);
}

// Add user
const postCreateUser = (name, job) => {
    return axios.post("/api/users", {name , job})
}

// export theo kiểu Object
export { fetchAllUser, postCreateUser }