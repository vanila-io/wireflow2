import React, { lazy, Suspense } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import GGEditor from 'gg-editor';
import Layout from 'antd/es/layout';
import 'antd/es/layout/style/css';

const Wireflow = lazy(() => import('../Wireflow'));

const App = () => {
  return (
    <Layout>
      <Layout.Content>
        <GGEditor>
          <Suspense fallback={'...'}>
            <Router>
              <Switch>
                <Route exact path='/' component={Wireflow} />
              </Switch>
            </Router>
          </Suspense>
        </GGEditor>
      </Layout.Content>
    </Layout>
  );
};

export default App;
