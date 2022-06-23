import React from 'react';
import { Switch } from 'react-router-dom';
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import ApplicationUser from './application-user';
import Product from './product';
import Image from './image';
import Category from './category';
import Order from './order';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default ({ match }) => {
  return (
    <div>
      <Switch>
        {/* prettier-ignore */}
        <ErrorBoundaryRoute path={`${match.url}application-user`} component={ApplicationUser} />
        <ErrorBoundaryRoute path={`${match.url}product`} component={Product} />
        <ErrorBoundaryRoute path={`${match.url}image`} component={Image} />
        <ErrorBoundaryRoute path={`${match.url}category`} component={Category} />
        <ErrorBoundaryRoute path={`${match.url}order`} component={Order} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </Switch>
    </div>
  );
};
