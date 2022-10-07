import axiosClient from "./axiosClient";

const blogApi = {
    getAll() {
        return axiosClient.get('/blogs?_expand=category&_expand=author')
    },
    getOne(id) {
        return axiosClient.get(`/blogs/${id}?_expand=category&_expand=author`)
    },
    create(data) {
        return axiosClient.post('/blog', data)
    },
    update(id, data) {
        return axiosClient.put(`/blog/${id}`, data)
    },
    delete(id) {
        return axiosClient.delete(`/blog/${id}`)
    },
    getFeaturePost() {
        return axiosClient.get('/blogs?_expand=category&_expand=author&_limit=1&_page=1')
    },
    getPreviewPost() {
        return axiosClient.get('/blogs?_expand=category&_expand=author&_limit=4')
    },
    getListPostPerPage(page) {
        return axiosClient.get(`/blogs?_expand=category&_expand=author&_page=${page}&_limit=4`)
    },
    getBlogsByCategory(id) {
        return axiosClient.get(`/blogs?categoryId=${id}&_expand=category&_expand=author`)
    },
    getBlogsByAuthor(id) {
        return axiosClient.get(`/blogs?authorId=${id}&_expand=category`)
    }
}

export default blogApi