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
