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
        <div>
          klj
        </div>
      </Col>
    </Row>
  );
};

export default Home;
