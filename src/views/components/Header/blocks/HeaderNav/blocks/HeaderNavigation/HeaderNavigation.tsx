import React from 'react';
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { navigatorLinks } from '@src/views/components/Header/common/data';

import styles from './HeaderNavigation.module.sass';

const HeaderNavigation: React.FC = () => {
  return (
    <Col xl={3} lg={4} md={6} sm={6} xs={6} className=" d-flex justify-content-around ">
      {navigatorLinks.map((item) => (
        <NavLink
          className={styles.inactive}
          activeClassName={styles.active}
          to={item.link}
          key={item.title}
        >
          {item.title}
        </NavLink>
      ))}
    </Col>
  );
};

export default HeaderNavigation;
