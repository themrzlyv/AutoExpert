import { Typography } from '@material-ui/core';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ByCreated: React.FC = () => {
  return (
    <Row>
      <Col
        xl={4}
        lg={4}
        md={4}
        sm={12}
        xs={12}
        className="mx-auto my-4 d-flex align-items-center justify-content-center"
      >
        <Typography variant="h6" className="fw-light t-darken-white">
          &#169; AutoExpert 2021.
        </Typography>
      </Col>
    </Row>
  );
};

export default ByCreated;
