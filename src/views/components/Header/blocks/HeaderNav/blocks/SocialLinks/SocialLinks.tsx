import { socialMediaData } from '@src/views/components/Header/common/data';
import React from 'react';
import { Col } from 'react-bootstrap';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';

const SocialLinks: React.FC = () => {
  return (
    <Col xl={3} lg={3} md={6} sm={6} xs={6} className="d-flex align-items-center justify-content-around">
      {socialMediaData.map((item) => (
        <IconButton 
          onClick={() => console.log(item.link)}
          edge="end"
          key={item.title}
        >
          <SvgIcon fontSize="small" component={item.icon} />
        </IconButton>
      ))}
    </Col>
  );
};

export default SocialLinks;
