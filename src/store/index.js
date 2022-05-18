import { makeAutoObservable, observable, onBecomeObserved } from 'mobx';
import { getTasks, getUsers, addTask, deleteTask, editUser, getComments } from '../api'
import { api } from '../api' //AXIOS


// НОВЫЕ СТОРЫ

class TasksStore2 {
    tasks = [];

    // filter = {};
    // page = 0;
    // limit = 0;

    constructor() {
        makeAutoObservable(this, {}, {
            autoBind: true,
        });
    }

    fetchAsyncTasks() {
        return api.getAsyncTasks()
            .then((data) => {
                this.tasks = data.data;
            })
    }


}

export const tasks2 = new TasksStore2();


class UsersStore2 {
    data = [];
    loggedUser = null;

    constructor() {
        makeAutoObservable(this, {}, {
            autoBind: true,
        });
    }

    fetchAsyncUsers() {
        return api.getAsyncUsers()
            .then(({ data }) => {
                this.data = data;
                // console.log(this.tasks)
            })
    }

}

export const users2 = new UsersStore2();

// ЗАДАЧИ

class TaskStore {
    id;
    userId = '';
    assignedId = '';
    title = '';
    description = '';
    type = 'task';
    dateOfCreation = new Date();
    dateOfUpdate = new Date();
    timeInMinutes = 0;
    status = 'opened';
    rank = 'low'

    constructor({ id, userId, assignedId, title, description, type, dateOfCreation, dateOfUpdate, timeInMinutes, status, rank }) {
        makeAutoObservable(this, {}, {
            autoBind: true
        });

        this.id = id;
        this.userId = userId;
        this.assignedId = assignedId;
        this.title = title;
        this.description = description;
        this.type = type;
        this.dateOfCreation = dateOfCreation;
        this.dateOfUpdate = dateOfUpdate;
        this.timeInMinutes = timeInMinutes;
        this.status = status;
        this.rank = rank;
    }
}

class TasksStore {
    data = [];
    // filteredData = [];
    currentUserTasks = [];

    filter = {};
    page = 0;
    limit = 0;

    constructor() {
        makeAutoObservable(this, {}, {
            autoBind: true,

            // data: observable,
            // filteredData: observable
        });

        // onBecomeObserved(this, 'data', this.fetch);
        // onBecomeObserved(this, 'currentUserTasks', this.fetch);
    }

    *fetch() {
        const response = yield getTasks(this.filter, this.page, this.limit);
        this.data = response.data.map(task => new TaskStore(task));
        this.currentUserTasks = response.data.map(task => new TaskStore(task));
    }

    *addTask(data) {
        yield addTask(data)
        yield this.fetch();
    }

    *deleteTask(data) {
        yield deleteTask(data)
        yield this.fetch();
    }

}

export const tasks = new TasksStore();


// ПОЛЬЗОВАТЕЛИ


class UserStore {
    id;
    username = '';
    login = '';
    about = '';
    photoUrl = ''

    constructor({ id, username, login, about, photoUrl }) {
        makeAutoObservable(this, {}, {
            autoBind: true
        });

        this.id = id;
        this.username = username;
        this.login = login;
        this.about = about;
        this.photoUrl = photoUrl;
    }
}

class UsersStore {
    data = [];

    constructor() {
        makeAutoObservable(this, {}, {
            autoBind: true,
        });

        // onBecomeObserved(this, 'data', this.fetch);
    }

    *fetch() {
        const response = yield getUsers();
        this.data = response.map(event => new UserStore(event));
    }

    *editUser(data) {
        yield editUser(data)
        yield this.fetch();
    }
}

export const users = new UsersStore();

// class CommentStore {
//     id;
//     taskId = '';
//     userId = '';
//     text = '';
//     dateOfCreation = '';
//     dateOfUpdate = ""

//     constructor({ id, taskId, userId, text, dateOfCreation, dateOfUpdate }) {
//         makeAutoObservable(this, {}, {
//             autoBind: true
//         });

//         this.id = id;
//         this.taskId = taskId;
//         this.userId = userId;
//         this.text = text;
//         this.dateOfCreation = dateOfCreation;
//         this.dateOfUpdate = dateOfUpdate;
//     }
// }

// class CommentsStore {
//     data = [];
//     // taskId = "";

//     constructor() {
//         makeAutoObservable(this, {}, {
//             autoBind: true,
//         });

//         onBecomeObserved(this, 'data', this.fetch);
//     }

//     *getComments(taskId) {
//         const response = yield getComments(taskId);
//         this.data = response.map(comment => new CommentStore(comment));
//     }
// }
// export const comments = new CommentsStore();


