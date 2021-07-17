import { IconButton, SvgIcon } from '@material-ui/core';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

import styles from './SocialNav.module.sass';
import { footerSocialData } from '@views/components/Layout/components/Footer/common/constants';

const SocialNav: React.FC = () => {
  return (
    <Row className="mt-2 mb-4">
      <Col
        xl={2}
        lg={3}
        md={4}
        sm={4}
        xs={5}
        className="d-flex align-items-center justify-content-evenly mx-auto"
      >
        {footerSocialData.map((item) => (
          <IconButton
            edge="start"
            color="primary"
            className={styles.iconBtn}
            onClick={() => console.log(item.link)}
            key={item.id}
          >
            <SvgIcon  fontSize="medium" component={item.icon} className={styles.icon} />
          </IconButton>
        ))}
      </Col>
    </Row>
  );
};

export default SocialNav;
