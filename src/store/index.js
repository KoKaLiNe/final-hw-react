import { makeAutoObservable, observable, onBecomeObserved } from 'mobx';
import { getTasks, getUsers, addTask } from '../api'


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
    filteredData = [];
    currentUserTasks = [];

    filter = {};
    page = 0;
    limit = 0;

    constructor() {
        makeAutoObservable(this, {}, {
            autoBind: true,

            data: observable,
            filteredData: observable
        });

        onBecomeObserved(this, 'data', this.fetch);
        onBecomeObserved(this, 'filteredData', this.fetch);
        onBecomeObserved(this, 'data', this.filterTask);
    }

    *fetch() {
        const response = yield getTasks({}, 0, 0);
        this.data = response.data.map(task => new TaskStore(task));
        this.filteredData = response.data.map(task => new TaskStore(task));
        this.currentUserTasks = response.data.map(task => new TaskStore(task));
    }

    *filterTask() {
        const response = yield getTasks(this.filter, this.page, this.limit);
        this.data = response.data.map(task => new TaskStore(task));
        
    }

    *addTask(data) {
        yield addTask(data)
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

        onBecomeObserved(this, 'data', this.fetch);
    }

    *fetch() {
        const response = yield getUsers();
        this.data = response.map(event => new UserStore(event));
    }
}

export const users = new UsersStore();