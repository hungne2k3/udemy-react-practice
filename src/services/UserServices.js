import axios from "./custom-axios";

const fetchAllUser = (page) => {
    return axios.get(`/api/users?page=${page}`);
}

// export theo kiểu Object
export { fetchAllUser }