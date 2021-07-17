import { Typography } from '@material-ui/core';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { partOfLogo } from '@infrastructure/data/constants';

const FooterLogo: React.FC = () => {
  return (
    <Row>
      <Col
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className="d-flex mt-4 align-items-center justify-content-center"
      >
        <Typography variant="h3" className="fw-bolder" style={{color: 'white'}}>
          {partOfLogo.AUTO}
        </Typography>
        <Typography variant="h3" className="fw-lighter" style={{color: 'white'}}>
          {partOfLogo.EXPERT}
        </Typography>
      </Col>
    </Row>
  );
};

export default FooterLogo;
