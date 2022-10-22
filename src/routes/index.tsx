import { Switch } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import { Dashboard } from '../pages/Dashboard';
import { Home } from '../pages/Home';
import { PageNotFound } from '../pages/PageNotFound';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Route } from './Route';

export const Routes = () => {
  const { token } = useAuth();
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route component={PageNotFound} isPrivate={!!token} />
    </Switch>
  );
};
