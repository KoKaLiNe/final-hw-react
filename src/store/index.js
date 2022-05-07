import { makeAutoObservable, onBecomeObserved } from 'mobx';
import { getTasks, getUsers } from '../api'


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

    constructor() {
        makeAutoObservable(this, {}, {
            autoBind: true,
        });

        onBecomeObserved(this, 'data', this.fetch);
    }


    *fetch() {
        yield getTasks()
            .then(({ data }) => {
                this.data = data.map(task => new TaskStore(task));
            })
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

    constructor({ id, username, login, about, photoUrl}) {
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
        this.data = response.map(user => new UserStore(user));
    }
}

export const users = new UsersStore();




