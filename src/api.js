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

export const getTasks = () => {
    return request(`${url}/tasks`, 'POST', { "filter": {}, "page": 0, "limit": 0 })
}

export const addTask = (data) => {
    const taskData = {
        ...data,
    }
    return request(`${url}/tasks/createOrEdit`, 'PUT', taskData)
}