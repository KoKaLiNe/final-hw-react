import React from 'react';
import '../../scss/App.scss';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { AppRoute } from '../../const';
import { observer } from 'mobx-react-lite';
import Login from '../../pages/login/login';
import TaskList from '../../pages/taskList/taskList';
import UserList from '../../pages/userList/userList';
import Edit from '../../pages/edit/edit';
import { tasks, users } from '../../store/index';


const App = observer(() => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {/* условие залогина наверное надо добавить */}
          <Redirect to={AppRoute.LOGIN} />
        </Route>
        <Route path={AppRoute.LOGIN} exact>
          <Login />
        </Route>
        <Route path={AppRoute.TASK} exact>
          <TaskList
            tasks={tasks.data}
            users={users.data}
          />
        </Route>
        <Route path={AppRoute.EDIT} exact>
          <Edit
            tasks={tasks.data}
            users={users.data}
          />
        </Route>
        <Route path={AppRoute.USER} exact>
          <UserList
            tasks={tasks.data}
            users={users.data}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
})

export default App;
