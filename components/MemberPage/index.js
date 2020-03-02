import React from 'react';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';

import { Route, Switch, Redirect } from 'react-router-dom';
import Loading from 'components/Loading';

import TabBar from 'components/TabBar';
import ImageIcon from 'components/ImageIcon';
import styles from './index.module.scss';

const Overview = React.lazy(() => import('./Overview'));
const Party = React.lazy(() => import('./Party'));

const routes = [
  { path: '/members/:id/', exact: true, name: '表現', component: Overview },
  { path: '/members/:id/party', name: '政黨', component: Party },
];


let NewTabBar = ({ history, match }) => {
  const options = routes.map((route) => ({
    label: route.name,
    value: route.path,
  }))
  const value = match.path;
  const onChange = (path) => {
    history.push(path.replace(':id', match.params.id));
  }
  return <TabBar options={options} value={value} onChange={onChange} />;
}
NewTabBar = withRouter(NewTabBar);

export default ({ match, history }) => {
  return (
    <div className="flex-column-parent fullheight">
      <div className="flex-row-parent py-2 flex-center px-2">
        <ImageIcon />
        <div className="flex-expand px-2">
          <h3 className=""><b>田北辰</b></h3>
          <p>新民黨</p>
        </div>
        <div className={classnames(styles.constituency, 'flex-100')}>
          <div className="flex-self-center fullwidth">
            <div className="mb h2">
              新界東
            </div>
            <div className="h5">地區直選</div>
          </div>
        </div>
      </div>

      <React.Suspense fallback={<Loading />}>
        <Switch>
          {routes.map((route, idx) => {
            return route.component ? (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={props => (
                  <>
                    <NewTabBar />
                    <div className="p flex-expand overflow-y ">
                      <route.component {...props} />
                    </div>
                  </>
                )} />
            ) : (null);
          })}
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </React.Suspense>
    </div>
  )
}