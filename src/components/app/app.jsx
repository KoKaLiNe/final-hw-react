import React, { useEffect } from 'react';
import '../../scss/App.scss';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { AppRoute } from '../../const';
import { observer } from 'mobx-react-lite';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import Users from '../../pages/users/users';
import Edit from '../../pages/edit/edit';
import { tasks, users } from '../../store/index';


const App = observer(() => {

  useEffect(() => {
    tasks.fetch();
    users.fetch()
  }, []);

  if ((tasks.data.length === 0) && (users.data.length === 0)) {
    return ("ЗАГРУЖАЕМ")
  } else {
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
            <Main
              tasks={tasks.data}
              users={users.data}
            />
          </Route>
          <Route path={AppRoute.EDIT} exact>
            <Edit tasks={tasks.data} users={users.data}
            />
          </Route>
          <Route path={AppRoute.ADD_TASK_TO_USER} exact>
            <Edit tasks={tasks.data} users={users.data}
            />
          </Route>
          <Route path={AppRoute.USER} exact>
            <Users tasks={tasks.data} users={users.data}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
})


export default App;
