import axios from 'axios'


// AXIOS
const inst = axios.create({
    baseURL: 'http://93.95.97.34/api'
})

export const api = {

    // Задачи

    getTasks: async (filter, page, limit) => {
        const response = await inst.post('/tasks', {
            filter: filter,
            page: page,
            limit: limit
        })
        return response;
    },

    addTask: async (data) => {
        await inst.put('/tasks/createOrEdit', {
            ...data,
            dateOfUpdate: new Date(),
            timeInMinutes: 0,
        })
    },

    deleteTask: async (taskId) => {
        await inst.delete(`/tasks/${taskId}`)
    },

    editStatus: async (taskId, status) => {
        await inst.patch(`/tasks/${taskId}/status/${status}`)
    },

    addWorktime: async (taskId) => {
        await inst.patch(`/tasks/${taskId}/worktime`)
    },

    // Комментарии

    getComments: async (taskId) => {
        const response = await inst.get(`/comments/${taskId}`)
        return response.data;
    },

    addComments: async (data) => {
        await inst.put(`/comments/createOrEdit`, data)
    },

    deleteComment: async (commentId) => {
        return await inst.delete(`/comments/${commentId}`)
    },

    // Пользователи

    getUsers: async () => {
        const response = await inst.get(`/users/all`)
        return response;
    },

    editUser: async (data) => {
        await inst.put('/users/edit', {
            ...data,
        })
    },





}




// FETCH

// const url = 'http://93.95.97.34/api';

// const request = async (url, method = 'GET', body) => {
//     const response = await fetch(url, {
//         method,
//         body: JSON.stringify(body),
//         headers: new Headers({
//             'Content-type': 'application/json'
//         })
//     })
//     return await response.json();
// }

// export const getUsers = () => {
//     return request(`${url}/users/all`);
// }

// export const getTasks = (filter, page, limit) => {
//     return request(`${url}/tasks`, 'POST', { "filter": filter, "page": page, "limit": limit })
// }

// export const addTask = (data) => {
//     const taskData = {
//         ...data,
//         dateOfUpdate: new Date(),
//         timeInMinutes: 0,
//     }
//     return request(`${url}/tasks/createOrEdit`, 'PUT', taskData)
// }

// export const editStatus = (taskId, status) => {
//     request(`${url}/tasks/${taskId}/status/${status}`, 'PATCH')
// }

// export const deleteTask = (taskId) => {
//     request(`${url}/tasks/${taskId}`, 'DELETE')
// }

// export const getComments = (taskId) => {
//     return request(`${url}/comments/${taskId}`, 'GET')
// }

// export const addComments = (data) => {
//     return request(`${url}/comments/createOrEdit`, 'PUT', data)
// }

// export const deleteComment = (commentId) => {
//     return request(`${url}/comments/${commentId}`, 'DELETE')
// }
// export const editUser = (data) => {
//     return request(`${url}/users/edit`, 'PUT', data)
// }

// export const addWorktime = (taskId) => {
//     return request(`${url}/tasks/${taskId}/worktime`, 'PATCH')
// }