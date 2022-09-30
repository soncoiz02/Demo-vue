import axiosClient from "./axiosClient";

const authorApi = {
    getOne(id) {
        return axiosClient.get(`/authors/${id}`)
    },
    getAll() {
        return axiosClient.get('/authors')
    }
}

export default authorApi