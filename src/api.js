import axios from 'axios'


// AXIOS
const inst = axios.create({
    baseURL: 'http://93.95.97.34/api'
})

export const api = {
    getAsyncTasks: async () => {
        try {
            const res = await inst.post('/tasks', {
                filter: {},
                page: 0,
                limit: 0
            })
            return res;
        } catch (e) {
        }
    },

    addAsyncTask: async (data) => {
        try {
            const res = await inst.put('/tasks/createOrEdit', {
                ...data,
                dateOfUpdate: new Date(),
                timeInMinutes: 0,
            })
            return res;
        } catch (e) {

        }
    },



    // export const addTask = (data) => {
    //     const taskData = {
    //         ...data,
    //         dateOfUpdate: new Date(),
    //         timeInMinutes: 0,
    //     }
    //     return request(`${url}/tasks/createOrEdit`, 'PUT', taskData)
    // }



    getAsyncUsers: async () => {
        try {
            const res = await inst.get(`/users/all`)
            return res;
        } catch (e) {
        }
    }


}




// FETCH

const url = 'http://93.95.97.34/api';

const request = async (url, method = 'GET', body) => {
    const response = await fetch(url, {
        method,
        body: JSON.stringify(body),
        headers: new Headers({
            'Content-type': 'application/json'
        })
    })
    return await response.json();
}

export const getUsers = () => {
    return request(`${url}/users/all`);
}

export const getTasks = (filter, page, limit) => {
    return request(`${url}/tasks`, 'POST', { "filter": filter, "page": page, "limit": limit })
}

export const addTask = (data) => {
    const taskData = {
        ...data,
        dateOfUpdate: new Date(),
        timeInMinutes: 0,
    }
    return request(`${url}/tasks/createOrEdit`, 'PUT', taskData)
}

export const editStatus = (taskId, status) => {
    request(`${url}/tasks/${taskId}/status/${status}`, 'PATCH')
}

export const deleteTask = (taskId) => {
    request(`${url}/tasks/${taskId}`, 'DELETE')
}

export const getComments = (taskId) => {
    return request(`${url}/comments/${taskId}`, 'GET')
}

export const addComments = (data) => {
    return request(`${url}/comments/createOrEdit`, 'PUT', data)
}

export const deleteComment = (commentId) => {
    return request(`${url}/comments/${commentId}`, 'DELETE')
}
export const editUser = (data) => {
    return request(`${url}/users/edit`, 'PUT', data)
}

export const addWorktime = (taskId) => {
    return request(`${url}/tasks/${taskId}/worktime`, 'PATCH')
}