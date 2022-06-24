import './home.scss';

import React from 'react';
import { Translate } from 'react-jhipster';
import { Row, Col, Alert } from 'reactstrap';

import { useAppSelector } from 'app/config/store';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <Row>
      <Col md="9">
        <h2>
          <Translate contentKey="home.title">Welcome to crm system</Translate>
        </h2>
        <p>Welcome to the main page of the crm system.</p>
        <p>
        You can add, modify, edit products using this system. In order to work with goods, select the entity item in the left menu. Next, open this item and select the required entity from the list. Next, a page will be opened to change this entity.
        </p>
      </Col>
    </Row>
  );
};

export default Home;
