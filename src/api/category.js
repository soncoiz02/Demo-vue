import axiosClient from "./axiosClient";

const categoryApi = {
    getOne(id) {
        return axiosClient.get(`/categories/${id}`)
    },
    getAll() {
        return axiosClient.get('/categories?_embed=blogs')
    }
}

export default categoryApi