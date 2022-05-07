const url = 'http://93.95.97.34/api';

const request = async (url, method, body, data = {}) => {
    const response = await fetch(url, {
        method,
        body: JSON.stringify(body),
        data,
        headers: new Headers({
            'Content-type': 'application/json'
        })

    })
    return await response.json();
}
export const getTasks = () => {
    return request(`${url}/tasks`, 'POST', { "filter": {}, "page": 0, "limit": 0 })
}

export const getUsers = () => {
    return request(`${url}/users/all`);
}

