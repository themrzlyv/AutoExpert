import { Typography } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';

import SearchIcon from '@material-ui/icons/Search';
import { typeOfPre } from '@src/components/CustomInput/common/data';

interface iProps {
  id?: string | undefined;
  label?: string | undefined;
  pre?: string | undefined;
  maxLength?: number | undefined;
  minLength?: number | undefined;
  required?: boolean | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined;
  error?: boolean | undefined;
}

const CustomInput: React.FC<iProps> = (props) => {
  const { id, label, pre, maxLength, minLength, required, onChange, onFocus, error } = props;
  const [isError, setIsError] = useState<boolean>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (maxLength && minLength && onChange) {
      if (e.target.value.length > maxLength || e.target.value.length < minLength) {
        return setIsError(true);
      } else {
        setIsError(false);
        return onChange(e);
      }
    }
  };

  const setIsPre = () => {
    switch (pre) {
      case typeOfPre.SEARCH:
        return <SearchIcon className="pre-input" />;

      default:
        return null;
    }
  };

  return (
    <div className="d-flex flex-column position-relative">
      {label && <label htmlFor={id}>{label}</label>}
      {error && isError && (
        <Typography color="error" component="p" variant="caption">
          Text must be max length {maxLength} min {minLength}
        </Typography>
      )}
      {pre && setIsPre()}
      <input
        id={id}
        type="text"
        required={required}
        maxLength={maxLength}
        minLength={minLength}
        onChange={(e) => handleChange(e)}
        onFocus={onFocus}
        className="text-input shadow-3"
        style={{ textIndent: pre && '30px' }}
      />
    </div>
  );
};

export default CustomInput;
