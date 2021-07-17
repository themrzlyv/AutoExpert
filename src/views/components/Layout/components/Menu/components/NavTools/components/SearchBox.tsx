import { IconButton } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

import SearchIcon from '@material-ui/icons/Search';
import { useAppSelector } from '@src/app/hooks.store';
import { menuWizardData } from '@src/infrastructure/services/selectors/appTools/Menu';
import { useDispatch } from 'react-redux';
import { setShowSearch } from '@views/components/Layout/components/Menu/common/redux/Menu.slice';

interface iProps {
  showSearch: boolean;
}

const SearchBoxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonContainer = styled(IconButton)``;

const InputComponent = styled.input<iProps>`
  display: ${({ showSearch }) => showSearch ? 'block' : 'none'}
`;

const SearchBox: React.FC = () => {
  const dispatch = useDispatch();
  const { showSearch } = useAppSelector(menuWizardData);
  return (
    <SearchBoxContainer>
      <ButtonContainer onClick={() => dispatch(setShowSearch())}>
        <SearchIcon />
      </ButtonContainer>
      <InputComponent className="text-input" showSearch={showSearch} />
    </SearchBoxContainer>
  );
};

export default SearchBox;
