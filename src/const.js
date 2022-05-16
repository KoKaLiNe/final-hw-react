export const AppRoute = {
    LOGIN: '/login',
    TASK_LIST: '/task-list',
    TASK: '/task-list/:id?',
    USER_LIST: '/users',
    USER: '/users/:id?',
    ADD: '/edit',
    ADD_TASK_TO_USER: '/users/:userid?/add',
    EDIT: '/edit/:id?/',
};

export const type = [
    {
        name: "Задача",
        value: "task"
    },
    {
        name: "Ошибка",
        value: "bug"
    }
];

export const status = [
    {
        name: "Открыто",
        value: "opened"
    }, 
    {
        name: "В работе",
        value: "inProgress"
    }, 
    {
        name: "Тестирование",
        value: "testing"
    }, 
    {
        name: "Сделано",
        value: "complete"
    }, 
]

export const rank = [
    {
        name: "Низкий",
        value: "low"
    },
    {
        name: "Средний",
        value: "medium"
    },
    {
        name: "Высокий",
        value: "high"
    },
]
