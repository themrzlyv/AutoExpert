import React from 'react';
import styled from 'styled-components';

const NavToolContainer = styled.div`
  width: 33.3%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NavTools:React.FC = ({children}) => {
  return (
    <NavToolContainer>
      {children}
    </NavToolContainer>
  );
};

export default NavTools;
