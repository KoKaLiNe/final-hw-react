import { makeAutoObservable, runInAction } from 'mobx';
import { getTasks, getUsers, addTask, deleteTask, editUser } from '../api'
import { api } from '../api' //AXIOS


// НОВЫЕ СТОРЫ

// class TasksStore2 {
//     data = [];
//     currentUserTasks = [];

//     filter = {};
//     page = 0;
//     limit = 0;


//     constructor() {
//         makeAutoObservable(this, {}, {
//             autoBind: true,
//         });
//     }

//     *fetch() {
//         const response = yield getTasks(this.filter, this.page, this.limit);
//         this.data = response.data;
//         this.currentUserTasks = response.data;

//         // this.data = response.data.map(task => new TaskStore(task));
//         // this.currentUserTasks = response.data.map(task => new TaskStore(task));
//     }

//     *addTask(data) {
//         yield addTask(data)
//         yield this.fetch();
//     }

//     *deleteTask(data) {
//         yield deleteTask(data)
//         yield this.fetch();
//     }



//     // constructor() {
//     //     makeAutoObservable(this, {}, {
//     //         autoBind: true,
//     //     });
//     // }

//     // fetchAsyncTasks() {
//     //     return api.getAsyncTasks(this.filter, this.page, this.limit)
//     //         .then((response) => {
//     //             runInAction(() => {
//     //                 this.data = response.data;
//     //                 this.currentUserTasks = response.data;
//     //             })

//     //         })
//     // }
// }
// export const tasks2 = new TasksStore2();
// class UsersStore2 {
//     data = [];
//     loggedUser = null;

//     constructor() {
//         makeAutoObservable(this, {}, {
//             autoBind: true,
//         });
//     }

//     fetchAsyncUsers() {
//         return api.getAsyncUsers()
//             .then(({ data }) => {
//                 this.data = data;
//             })
//     }

// }
// export const users2 = new UsersStore2();





// ЗАДАЧИ

// class TaskStore {
//     id;
//     userId = '';
//     assignedId = '';
//     title = '';
//     description = '';
//     type = 'task';
//     dateOfCreation = new Date();
//     dateOfUpdate = new Date();
//     timeInMinutes = 0;
//     status = 'opened';
//     rank = 'low'

//     constructor({ id, userId, assignedId, title, description, type, dateOfCreation, dateOfUpdate, timeInMinutes, status, rank }) {
//         makeAutoObservable(this, {}, {
//             autoBind: true
//         });

//         this.id = id;
//         this.userId = userId;
//         this.assignedId = assignedId;
//         this.title = title;
//         this.description = description;
//         this.type = type;
//         this.dateOfCreation = dateOfCreation;
//         this.dateOfUpdate = dateOfUpdate;
//         this.timeInMinutes = timeInMinutes;
//         this.status = status;
//         this.rank = rank;
//     }
// }

class TasksStore {
    data = [];
    currentUserTasks = [];

    filter = {};
    page = 0;
    limit = 0;

    constructor() {
        makeAutoObservable(this, {}, {
            autoBind: true,
        });
    }

    // fetchAsyncTasks() {
    //     return api.getAsyncTasks(this.filter, this.page, this.limit)
    //         .then((response) => {
    //             runInAction(() => {
    //                 this.data = response.data.data;
    //                 this.currentUserTasks = response.data.data;
    //             })

    //         })
    // }

    // addTask(data) {
    //     return api.addAsyncTask(data)
    //         .then((response) =>
    //             runInAction(() => {
    //                 this.data = response.data.data;
    //                 this.currentUserTasks = response.data.data;
    //             })
    //         )
    // }


    *fetch() {
        const response = yield api.getTasks(this.filter, this.page, this.limit);
        this.data = response.data.data;
        this.currentUserTasks = response.data.data;
    }

    *addTask(data) {
        yield api.addTask(data)
        yield this.fetch();
    }

    *deleteTask(data) {
        yield api.deleteTask(data)
        yield this.fetch();
    }

    *editStatus(taskId, status) {
        yield api.editStatus(taskId, status)
        yield this.fetch();
    }

}

export const tasks = new TasksStore();


// ПОЛЬЗОВАТЕЛИ

class UsersStore {
    data = [];

    constructor() {
        makeAutoObservable(this, {}, {
            autoBind: true,
        });
    }

    *fetch() {
        const response = yield api.getUsers();
        this.data = response.data;
    }

    *editUser(data) {
        yield api.editUser(data)
        yield this.fetch();
    }
}

export const users = new UsersStore();