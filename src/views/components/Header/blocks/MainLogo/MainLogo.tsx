import React from 'react';
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { ReactComponent as RacingIcon } from '@assets/svg/racing.svg';
import { Typography } from '@material-ui/core';
import { partOfLogo } from '@src/views/components/Header/common/data';

const MainLogo: React.FC = () => {
  return (
    <Col xl={4} lg={4} md={4} sm={12} xs={12} className="d-flex align-items-center ">
      <RacingIcon width="3em" height="3em" className="my-1 mx-3 p-0" />
      <NavLink to="/" className="d-flex align-items-center">
        <Typography  variant="h5" className="fw-bolder t-red">
          {partOfLogo.AUTO}
        </Typography>
        <Typography  variant="h5" className=" t-blue">
        {partOfLogo.EXPERT}
        </Typography>
      </NavLink>
    </Col>
  );
};

export default MainLogo;
