import axiosClient from "./axiosClient";

const authorApi = {
    getOne(id) {
        return axiosClient.get(`/authors/${id}`)
    }
}

export default authorApi