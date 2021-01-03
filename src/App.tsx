import React, { FC, ReactElement } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import { Todos } from './features/todo';
import { history } from './store/history';

type AppProps = {
  title?: string;
  children?: never;
}

export const App: FC<AppProps> = ({ title }): ReactElement => {
  return (
    <div className="App">
      <h1>{ title }</h1>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Todos} />
        </Switch>
      </ConnectedRouter>
    </div>
  );
};
