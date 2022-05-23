import axios from 'axios'


const inst = axios.create({
    baseURL: 'http://93.95.97.34/api'
})

export const api = {

    // Задачи
    getTasks: async (filter, page, limit) => {
        const response = await inst.post('http://93.95.97.34/api/tasks', {
            filter: filter,
            page: page,
            limit: limit
        })
        return response;
    },

    addTask: async (data) => {
        await inst.put('http://93.95.97.34/api/tasks/createOrEdit', {
            ...data,
            dateOfUpdate: new Date(),
            timeInMinutes: 0,
        })
    },

    deleteTask: async (taskId) => {
        await inst.delete(`http://93.95.97.34/api/tasks/${taskId}`)
    },

    editStatus: async (taskId, status) => {
        await inst.patch(`http://93.95.97.34/api/tasks/${taskId}/status/${status}`)
    },

    addWorktime: async (taskId, data) => {
        await inst.patch(`http://93.95.97.34/api/tasks/${taskId}/worktime`, data)
    },

    // Комментарии
    getComments: async (taskId) => {
        const response = await inst.get(`http://93.95.97.34/api/comments/${taskId}`)
        return response.data;
    },

    addComments: async (data) => {
        await inst.put(`http://93.95.97.34/api/comments/createOrEdit`, data)
    },

    deleteComment: async (commentId) => {
        return await inst.delete(`http://93.95.97.34/api/comments/${commentId}`)
    },

    // Пользователи
    getUsers: async () => {
        const response = await inst.get(`http://93.95.97.34/api/users/all`)
        return response;
    },

    editUser: async (data) => {
        await inst.put('http://93.95.97.34/api/users/edit', {
            ...data,
        })
    },

    loginIn: async (login, password) => {
            const response = await inst.post(`http://93.95.97.34/api/users/login`, { "login": `${login}`, "password": `${password}` })
            return response;
    },

    getLoggedUser: async (id) => {
        const response = await inst.get(`http://93.95.97.34/api/users/${id}`)
        return response;
    }
}