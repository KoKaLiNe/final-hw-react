import React from 'react';
import '../../scss/App.scss';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from '../../pages/login/login';
import TaskList from '../../pages/taskList/taskList';
import UserList from '../../pages/userList/userList';
// import Task from '../../pages/edit/edit';
import Edit from '../../pages/edit/edit';
import { AppRoute } from '../../const';
import { observer } from 'mobx-react-lite';


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
          <TaskList />
        </Route>
        <Route path={AppRoute.EDIT} exact>
          <Edit />
        </Route>
        <Route path={AppRoute.USER} exact>
          <UserList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
})

export default App;
